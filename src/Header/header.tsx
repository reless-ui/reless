import * as React from "react";
import styled, { withTheme } from "styled-components";
import { ReactChild } from "react";
import Container from "../Container";

const StyledHeader = styled.div`
  padding: 15px 0;
  display: flex;
`;

const StyledLogoWrapper = styled.div`
  font-weight: bold;
  font-family: ${(props: any) => props.theme.fonts.fontSecondary};
`;

const StyledCenterContent = styled.div`
  flex-grow: 1;
`;

const StyledExtraItems = styled.div``;
const StyledExtraItem = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  display: inline-block;
  font-size: 14px;
  a:visited {
    color: #000;
  }
`;

interface HeaderProps {
  logo: string | ReactChild;
  extraLinks?: ReactChild[];
  theme?: any;
}

interface HeaderState {}

class Header extends React.Component<HeaderProps, HeaderState> {
  public static defaultProps = {};

  render() {
    const { logo, extraLinks, theme } = this.props;

    // console.log("header props", this.props, theme);

    return (
      <StyledHeader>
        <Container flex fluid={!theme.general.centered}>
          <StyledLogoWrapper>{logo}</StyledLogoWrapper>
          <StyledCenterContent />
          {extraLinks && (
            <StyledExtraItems>
              {extraLinks.map(extraLink => (
                <StyledExtraItem>{extraLink}</StyledExtraItem>
              ))}
            </StyledExtraItems>
          )}
        </Container>
      </StyledHeader>
    );
  }
}

export default withTheme(Header);
