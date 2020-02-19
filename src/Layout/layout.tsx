import * as React from "react";
import styled, { createGlobalStyle } from "styled-components";
import colors from "../styles/colors";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${colors.background};
    margin: 0;
    padding: 0;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  }
`;

const StyledDiv: any = styled.div`
  display: flex;
  flex-direction: ${(props: any) => (props.hasSider ? "row" : "column")};
  min-height: ${(props: any) => (!props.hasSider ? "100vh" : "0px")};
  flex-grow: ${(props: any) => (!props.hasSider ? "unset" : "1")};
`;
//padding: ${(props: any) =>
//  colors[props.props.size] === "lg" ? "10px" : "0px"};

interface LayoutProps {
  children: any;
}

interface LayoutState {}

class Layout extends React.Component<LayoutProps, LayoutState> {
  render() {
    const { children } = this.props;

    const hasSider =
      Array.isArray(children) &&
      children.some((chi: any) => chi.type.name === "Sider");
    // const hasFixedSider =
    //   hasSider &&
    //   children.find((chi: any) => chi.type.name === "Sider").props.fixed; todo use

    return (
      <>
        <GlobalStyle />
        <StyledDiv hasSider={hasSider}>{children}</StyledDiv>
      </>
    );
  }
}

export default Layout;
