import * as React from "react";
import styled from "styled-components";
import { StyledCol } from "../Col/col";

const StyledRow: any = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -${(props: any) => props.spacingVertical}px -${(props: any) =>
      props.spacingHorizontal}px;

  & > ${StyledCol} {
    padding: ${(props: any) => props.spacingVertical}px
      ${(props: any) => props.spacingHorizontal}px;
  }
`;
//padding: ${(props: any) =>
//  colors[props.props.size] === "lg" ? "10px" : "0px"};

interface RowProps {
  spacing?: number | object | [any];
  style?: object;
}

interface RowState {}

class Row extends React.Component<RowProps, RowState> {
  public static defaultProps = {
    size: "md"
  };

  render() {
    const { children, spacing, style } = this.props;

    const { spacingHorizontal, spacingVertical } = countSpacing(spacing);

    console.log("row: ", spacing);

    return (
      <StyledRow
        spacingHorizontal={spacingHorizontal}
        spacingVertical={spacingVertical}
        style={style}
      >
        {children}
      </StyledRow>
    );
  }
}

function countSpacing(spacing?: number | object | number[]) {
  if (!spacing) {
    return { spacingHorizontal: 0, spacingVertical: 0 };
  }

  if (Number(spacing) > 0) {
    return { spacingHorizontal: spacing, spacingVertical: 0 };
  }

  if (Array.isArray(spacing)) {
    return { spacingHorizontal: spacing[0], spacingVertical: spacing[1] };
  }

  return { spacingHorizontal: 0, spacingVertical: 0 };
}

export default Row;
