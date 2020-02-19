import * as React from "react";
import styled, { withTheme } from "styled-components";
import { ReactChild } from "react";
import Container from "../Container";

const StyledLandingPageTextStripe = styled.div`
  text-align: center;
  padding: 40px 10px;
  background-color: ${(props: any) => props.theme.colors.backgroundSecondary};
  margin-top: 30px;
  line-height: 1.8;
  font-size: 18px;
  margin-bottom: 30px;
`;

interface LandingPageTextStripeProps {
  text: string | ReactChild;
  theme?: any;
}

interface LandingPageTextStripeState {}

class LandingPageTextStripe extends React.Component<
  LandingPageTextStripeProps,
  LandingPageTextStripeState
> {
  public static defaultProps = {};

  render() {
    const { text, theme } = this.props;

    return (
      <StyledLandingPageTextStripe>
        <Container flex fluid={!theme.general.centered}>
          {text}
        </Container>
      </StyledLandingPageTextStripe>
    );
  }
}

export default withTheme(LandingPageTextStripe);
