import * as React from "react";
import styled, { css } from "styled-components";
import colors from "../styles/colors";

const fixedStyle = css`
  height: 100vh;
  position: fixed;
`;

const lightStyles = css`
  background-color: white;
  border-bottom: 1px solid ${colors.borderLight};
  color: black;
`;

const darkStyles = css`
  background-color: ${colors.menuDark};
  color: white;
`;

const StyledHeader: any = styled.div`
  width: 100%;
  box-shadow: 0 15px 20px -20px rgba(115, 162, 208, 0.1),
    0 0 15px rgba(115, 162, 208, 0.06);

  padding: 15px 15px;

  ${(props: any) => (props.bg === "dark" ? darkStyles : lightStyles)}

  ${(props: any) => (props.fixed ? fixedStyle : "")};
`;

interface HeaderProps {
  children: any;
  fixed?: boolean;
  bg?: "dark" | "light";
}

interface HeaderState {}

class Header extends React.Component<HeaderProps, HeaderState> {
  public static defaultProps = {
    bg: "dark"
  };

  render() {
    const { children, fixed, bg } = this.props;

    return (
      <StyledHeader fixed={fixed} bg={bg}>
        {children}
      </StyledHeader>
    );
  }
}

export default Header;
