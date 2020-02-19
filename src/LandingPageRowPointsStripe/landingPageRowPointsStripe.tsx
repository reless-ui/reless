import * as React from "react";
import styled, { withTheme } from "styled-components";
import { ReactChild } from "react";
import Container from "../Container";
import { layoutPageMargins } from "../utils/commonStyles";

const StyledLandingPageRowPointsStripe = styled.div`
  ${layoutPageMargins}
`;

const StyledLandingPageRowPointsStripeContent = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const StyledPoint = styled.div`
  flex: 1 1 0px
  text-align: center;
`;

interface LandingPageRowPointsStripeProps {
  points: ReactChild[];
  theme?: any;
}

interface LandingPageRowPointsStripeState {}

class LandingPageRowPointsStripe extends React.Component<
  LandingPageRowPointsStripeProps,
  LandingPageRowPointsStripeState
> {
  public static defaultProps = {};

  render() {
    const { points, theme } = this.props;

    return (
      <StyledLandingPageRowPointsStripe>
        <Container flex fluid={!theme.general.centered}>
          <StyledLandingPageRowPointsStripeContent>
            {points.map(point => (
              <StyledPoint>{point}</StyledPoint>
            ))}
          </StyledLandingPageRowPointsStripeContent>
        </Container>
      </StyledLandingPageRowPointsStripe>
    );
  }
}

export default withTheme(LandingPageRowPointsStripe);
