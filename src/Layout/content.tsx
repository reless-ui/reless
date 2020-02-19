import * as React from "react";
import styled from "styled-components";
import colors from "../styles/colors";

const StyledDiv: any = styled.div`
  background: ${colors.background};
  color: white;
  width: 100%;
  transition: all 1s;

  margin-left: ${(props: any) =>
    props.hasLeftSiderFixed && props.hasLeftSiderCollapsed === "revealed"
      ? "200px"
      : props.hasLeftSiderCollapsed === "partial"
      ? "50px"
      : "0px"};
`;
//padding: ${(props: any) =>
//  colors[props.props.size] === "lg" ? "10px" : "0px"};

interface ContentProps {
  children: any;
  hasLeftSiderFixed?: boolean;
  hasLeftSiderCollapsed?: string;
}

interface ContentState {}

class Content extends React.Component<ContentProps, ContentState> {
  render() {
    const { children, hasLeftSiderFixed, hasLeftSiderCollapsed } = this.props;

    console.log("content..", children, hasLeftSiderCollapsed);

    return (
      <StyledDiv
        hasLeftSiderFixed={hasLeftSiderFixed}
        hasLeftSiderCollapsed={hasLeftSiderCollapsed}
      >
        {children}
      </StyledDiv>
    );
  }
}

export default Content;
