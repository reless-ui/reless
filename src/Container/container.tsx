import * as React from "react";
import styled, { css } from "styled-components";

const defaultStyles = css`
  max-width: 1140px;
  margin: 0 auto;
`;

const fluidStyles = css``;

const StyledContainer: any = styled.div`
  padding: 0 26px;
  width: 100%;
  box-sizing: border-box;
  ${(props: any) => (props.fluid ? fluidStyles : defaultStyles)}
  ${(props: any) => props.flex && "display: flex;"}
`;

interface ContainerProps {
  fluid?: boolean;
  flex?: boolean;
}

interface ContainerState {}

class Container extends React.Component<ContainerProps, ContainerState> {
  render() {
    const { children, fluid, flex } = this.props;

    return (
      <StyledContainer fluid={fluid} flex={flex}>
        {children}
      </StyledContainer>
    );
  }
}

export default Container;
