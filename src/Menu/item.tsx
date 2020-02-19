import * as React from "react";
import styled from "styled-components";
import colors from "../styles/colors";

const StyledItem: any = styled.div`
  display: flex;
  padding: 10px 15px;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background-color: ${colors.background};
  }
`;

interface ItemProps {
  children: any;
}

interface ItemState {}

class Item extends React.Component<ItemProps, ItemState> {
  render() {
    const { children } = this.props;

    return <StyledItem>{children}</StyledItem>;
  }
}

export default Item;
