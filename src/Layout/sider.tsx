import * as React from "react";
import styled, { css } from "styled-components";
import colors from "../styles/colors";

const fixedStyle = css`
  height: 100vh;
  position: fixed;
`;

const collapsedStyle = css`
  max-width: 0px;
  min-width: 0px;
  width: 0px;
`;

const partialStyle = css`
  max-width: 50px;
  min-width: 50px;
  width: 50px;
`;

const revealedStyle = css`
  max-width: 200px;
  min-width: 200px;
  width: 200px;
`;

const lightStyles = css`
  background-color: white;
  border-right: 1px solid ${colors.borderLight};
  color: black;
`;

const darkStyles = css`
  background-color: ${colors.menuDark};
  color: white;
`;

const StyledSider: any = styled.div`
  background: blue;
  left: 0px;
  overflow: hidden;
  flex: 0 0 200px;
  transition: all 1s ;
  ${(props: any) =>
    props.collapsed === "collapsed"
      ? collapsedStyle
      : props.collapsed === "partial"
      ? partialStyle
      : revealedStyle}
  // ${(props: any) => (props.fixed ? fixedStyle : "")};
  
    ${(props: any) => (props.bg === "dark" ? darkStyles : lightStyles)}

`;
//padding: ${(props: any) =>
//  colors[props.props.size] === "lg" ? "10px" : "0px"};

interface SiderProps {
  children: any;
  fixed?: boolean;
  collapsed?: string;
  bg?: "dark" | "light";
}

interface SiderState {}

class Sider extends React.Component<SiderProps, SiderState> {
  public static defaultProps = {
    bg: "dark"
  };

  render() {
    const { children, fixed, collapsed, bg } = this.props;

    return (
      <StyledSider fixed={fixed} bg={bg} collapsed={collapsed}>
        {children}
      </StyledSider>
    );
  }
}

export default Sider;
