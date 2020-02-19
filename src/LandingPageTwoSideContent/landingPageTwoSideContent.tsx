import * as React from "react";
import styled, { withTheme } from "styled-components";
import { ReactChild } from "react";

const StyledLandingPageTwoSideContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledLandingPageTwoSideFirstContent = styled.div`
  flex: 1 1 0px;
  justify-content: center;
  align-items: center;
`;
const StyledLandingPageTwoSideSecondContent = styled.div`
  flex: 1 1 0px;
  justify-content: center;
  align-items: center;
`;
// const StyledLandingPageTwoSideContentSideContent = styled.div`
//   flex-grow: 1;
//   justify-content: center;
//   align-items: center;
//   display: flex;
// `;

interface LandingPageTwoSideContentProps {
  firstContent: string | ReactChild;
  secondContent: string | ReactChild;
  theme?: any;
}

interface LandingPageTwoSideContentState {}

class LandingPageTwoSideContent extends React.Component<
  LandingPageTwoSideContentProps,
  LandingPageTwoSideContentState
> {
  public static defaultProps = {};

  render() {
    const { firstContent, secondContent } = this.props;

    return (
      <StyledLandingPageTwoSideContent>
        <StyledLandingPageTwoSideFirstContent>
          {firstContent}
        </StyledLandingPageTwoSideFirstContent>
        <StyledLandingPageTwoSideSecondContent>
          {secondContent}
        </StyledLandingPageTwoSideSecondContent>
      </StyledLandingPageTwoSideContent>
    );
  }
}

export default withTheme(LandingPageTwoSideContent);
