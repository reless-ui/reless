import * as React from "react";
import styled, { withTheme } from "styled-components";
import { ReactChild } from "react";
import Container from "../Container";
import { gridSizes } from "../styles/sizes";

const StyledLandingPageMain = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  margin-bottom: 15px;
  margin-top: 15px;
`;
const StyledLandingPageMainContent = styled.div`
  display: flex;
  flex-wrap: wrap; // mobil
  @media (min-width: ${gridSizes["md"]}px) {
    flex-wrap: nowrap;
  }
`;
const StyledLandingPageMainTextContent = styled.div`
  width: 100%; // mobil
  @media (min-width: ${gridSizes["md"]}px) {
    flex: 1 1 0px;
    width: inherit;
  }
`;
const StyledLandingPageMainSideContent = styled.div`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-top: 60px;
  @media (min-width: ${gridSizes["md"]}px) {
    margin-top: 0px;
  }
`;
const StyledTitle = styled.h1`
  font-weight: normal;
  font-family: ${(props: any) => props.theme.fonts.fontSecondary};
`;
const StyledDescription = styled.h3`
  font-weight: normal;
  margin-bottom: 30px;
`;

interface LandingPageMainProps {
  title: string | ReactChild;
  description?: string | ReactChild;
  actions?: ReactChild[];
  sideContent?: string | ReactChild;
  theme?: any;
}

interface LandingPageMainState {}

class LandingPageMain extends React.Component<
  LandingPageMainProps,
  LandingPageMainState
> {
  public static defaultProps = {};

  render() {
    const { title, description, actions, sideContent, theme } = this.props; // pridat sideContent

    return (
      <StyledLandingPageMain>
        <Container flex fluid={!theme.general.centered}>
          <StyledLandingPageMainContent>
            <StyledLandingPageMainTextContent>
              <StyledTitle>{title}</StyledTitle>
              {description && (
                <StyledDescription>{description}</StyledDescription>
              )}
              {actions && actions.map(action => action)}
            </StyledLandingPageMainTextContent>

            {sideContent && (
              <StyledLandingPageMainSideContent>
                {sideContent}
              </StyledLandingPageMainSideContent>
            )}
          </StyledLandingPageMainContent>
        </Container>
      </StyledLandingPageMain>
    );
  }
}

export default withTheme(LandingPageMain);
