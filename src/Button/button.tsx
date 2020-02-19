import * as React from "react";
import styled, { css } from "styled-components";

import colors from "../styles/colors";

const BUTTON_SIZES_TO_PX = {
  sm: {
    padding: "3px 7px;"
  },
  md: {
    padding: "8px 15px;"
  },
  lg: {
    padding: "12px 22px;"
  }
};

const buttonStyle = css`
  border-radius: 5px;
`;

const StyledButton: any = styled.button`
  ${buttonStyle} 
  background-color: ${(props: any) => colors[props.color]};
  color: ${(props: any) => colors.colorsToTextColors[props.color]};
  font-size: 14px;
  line-height: 1.5;
  display: inline-block;
  
  padding: ${(props: any) => BUTTON_SIZES_TO_PX[props.size].padding}
  
  &+${buttonStyle} {
    margin-right: 8px;
  }
  
  
`;
// &+${buttonStyle} {
//  margin-left: 8px;
// }
//padding: ${(props: any) =>
//  colors[props.props.size] === "lg" ? "10px" : "0px"};

export interface ButtonProps {
  color:
    | "primary"
    | "secondary"
    | "success"
    | "info"
    | "warning"
    | "danger"
    | "link";

  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}

interface ButtonState {
  loading?: boolean | { delay?: number };
  hasTwoCNChar: boolean;
}

class Button extends React.Component<ButtonProps, ButtonState> {
  public static defaultProps = {
    size: "md"
  };

  render() {
    const { children, color, onClick, size } = this.props;

    return (
      <StyledButton color={color} onClick={onClick} size={size}>
        {children}
      </StyledButton>
    );
  }
}

export default Button;
