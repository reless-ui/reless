import * as React from "react";
import styled from "styled-components";

import Item from "./item";
import { ReactChild } from "react";

const StyledSubMenu: any = styled.div``;

const StyledSubMenuTitle: any = styled.div`
  padding: 13px 15px 8px 15px;
  font-size: 15px;
  font-weight: 500;
  ${(props: any) =>
    props.collapsible &&
    `
  cursor:pointer;`}
`;

const StyledSubMenuContent: any = styled.div`
  padding-left: 24px;
  ${(props: any) =>
    props.collapsed &&
    `max-height:0px;
  overflow:hidden;`}
`;

interface SubMenuProps {
  children: any;
  title: ReactChild;
  collapsible?: boolean;
}

interface SubMenuState {
  collapsed: boolean;
}

class SubMenu extends React.Component<SubMenuProps, SubMenuState> {
  public static defaultProps = {
    mode: "vertical",
    collapsible: true
  };

  state = { collapsed: false };

  static Item = Item;

  toggleCollapsible = () => {
    if (!this.props.collapsible) {
      return;
    }

    this.setState({ collapsed: !this.state.collapsed });
  };

  render() {
    const { children, title, collapsible } = this.props;
    const { collapsed } = this.state;

    return (
      <StyledSubMenu>
        <StyledSubMenuTitle
          onClick={this.toggleCollapsible}
          collapsible={collapsible}
        >
          {title}
        </StyledSubMenuTitle>
        <StyledSubMenuContent collapsed={collapsible && collapsed}>
          {children}
        </StyledSubMenuContent>
      </StyledSubMenu>
    );
  }
}

export default SubMenu;
