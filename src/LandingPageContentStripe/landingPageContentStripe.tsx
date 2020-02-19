import * as React from "react";
import styled, { withTheme } from "styled-components";
import { ReactChild } from "react";
import Container from "../Container";
import { layoutPageMargins } from "../utils/commonStyles";

const StyledLandingPageContentStripe = styled.div`
  ${layoutPageMargins}
`;
const StyledLandingPageContentTitle = styled.h3`
  font-family: ${(props: any) => props.theme.fonts.fontSecondary};
  font-weight: normal;
  font-size: 26px;
`;

interface LandingPageContentStripeProps {
  title?: string | ReactChild;
  children?: ReactChild[];
  theme?: any;
}

interface LandingPageContentStripeState {}

class LandingPageContentStripe extends React.Component<
  LandingPageContentStripeProps,
  LandingPageContentStripeState
> {
  public static defaultProps = {};

  render() {
    const { title, children, theme } = this.props;

    return (
      <StyledLandingPageContentStripe>
        <Container fluid={!theme.general.centered}>
          {title && (
            <StyledLandingPageContentTitle>
              {title}
            </StyledLandingPageContentTitle>
          )}
          {children}
        </Container>
      </StyledLandingPageContentStripe>
    );
  }
}

export default withTheme(LandingPageContentStripe);
