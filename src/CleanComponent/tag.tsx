import * as React from "react";
import styled from "styled-components";
import { ReactChild } from "react";

const StyledTag = styled.span`
  display: inline-block;
  margin-right: 8px;
  padding: 0 7px;
  font-size: 12px;
  line-height: 20px;
  white-space: nowrap;
  border: 1px solid black;
  border-radius: 4px;
  cursor: default;
  opacity: 1;
  transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
`;

interface TagProps {
  type?: string;
  size?: "sm" | "md" | "lg";
  children: string | ReactChild;
}

interface TagState {}

class Tag extends React.Component<TagProps, TagState> {
  public static defaultProps = {};

  render() {
    const { children } = this.props;

    return <StyledTag {...this.props}>{children}</StyledTag>;
  }
}

export default Tag;
