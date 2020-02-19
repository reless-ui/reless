import * as React from "react";
import styled from "styled-components";

const StyledIcon = styled.i`
  width: 14px;
  margin-right: 10px;
  font-size: 14px;
`;

interface IconProps {
  type: string;
  size?: "sm" | "md" | "lg";
  spin?: boolean;
  rotate?: number;
}

interface IconState {}

class Icon extends React.Component<IconProps, IconState> {
  public static defaultProps = {
    size: "md",
    spin: false,
    rotate: 0
  };

  render() {
    const { type } = this.props;

    return <StyledIcon className={`fa fa-${type}`} />;
  }
}

export default Icon;
