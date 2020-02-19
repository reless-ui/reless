import * as React from "react";
import styled, { css } from "styled-components";
import { gridSizes } from "../styles/sizes";

const GRID_SIZE = 12;

// todo add button 100% if not defined, make responsive...

const StyledColEqualWidth = css`
  flex-grow: 1;
  max-width: 100%;
`;

export const StyledCol: any = styled.div`
  flex-basis: 0;
  box-sizing: border-box;

  ${(props: any) =>
    !props.xs
      ? StyledColEqualWidth
      : `
   flex: 0 0 ${100 / (GRID_SIZE / props.xs)}%;
   max-width: ${100 / (GRID_SIZE / props.xs)}%;
  `}

  ${(props: any) =>
    ["sm", "md", "lg", "xl", "xxl"].map(
      oneSize =>
        props[oneSize] &&
        `
         @media (min-width: ${gridSizes[oneSize]}px) {
            flex: 0 0 ${100 / (GRID_SIZE / props[oneSize])}%;
            max-width: ${100 / (GRID_SIZE / props[oneSize])}%;
         }
   `
    )}
`;
//padding: ${(props: any) =>
//  colors[props.props.size] === "lg" ? "10px" : "0px"};

type SizeDefinition = string | object | number;

interface ColProps {
  xs?: SizeDefinition;
  sm?: SizeDefinition;
  md?: SizeDefinition;
  lg?: SizeDefinition;
  xl?: SizeDefinition;
  xxl?: SizeDefinition;
}

interface ColState {}

class Col extends React.Component<ColProps, ColState> {
  public static defaultProps = {
    size: "md"
  };

  render() {
    const { children } = this.props;

    // console.log("col prs", this.props);

    return <StyledCol {...this.props}>{children}</StyledCol>;
  }
}

export default Col;
