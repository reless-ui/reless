import * as React from "react";
import styled from "styled-components";

import Item from "./item";
import SubMenu from "./subMenu";

const StyledMenu: any = styled.div`
`;

interface MenuProps {
  children: any;
  mode: "horizontal" | "vertical";
}

interface MenuState {}

class Menu extends React.Component<MenuProps, MenuState> {
  public static defaultProps = {
    mode: "vertical"
  };

  static Item = Item;
  static SubMenu = SubMenu;

  render() {
    const { children } = this.props;

    return <StyledMenu>{children}</StyledMenu>;
  }
}

export default Menu;
