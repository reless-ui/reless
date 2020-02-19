import * as React from "react";
import styled from "styled-components";
import { ReactChild } from "react";
import colors from "../styles/colors";

const MARGIN_TOOLTIP_TO_WRAPPER_PX = 5;

const StyledWrapper: any = styled.span`
  position: relative;
  // display: inherit;
  display: inherit;
`;

const StyledTooltip: any = styled.span`
  display: block;
  position: absolute;
  border-radius: 5px;
  padding: 5px 10px;
  background: ${colors.menuDark};
  max-width: 200px;
  top: ${(props: any) => props.marginTop}px;
  left: ${(props: any) => props.marginLeft}px;
  color: white;
  font-size: 14px;
`;

export type TooltipPlacement =
  | "top"
  | "left"
  | "right"
  | "bottom"
  | "topLeft"
  | "topRight"
  | "bottomLeft"
  | "bottomRight"
  | "leftTop"
  | "leftBottom"
  | "rightTop"
  | "rightBottom";

interface TooltipProps {
  title: string;
  children: ReactChild;
  placement?: TooltipPlacement;
}

interface TooltipState {
  append: boolean;
  show: boolean;
  marginLeft: number;
  marginTop: number;
}

class Tooltip extends React.Component<TooltipProps, TooltipState> {
  public static defaultProps = {
    placement: "top"
  };

  state = { append: false, show: false, marginLeft: 0, marginTop: 0 };

  wrapperRef = React.createRef<HTMLSpanElement>();
  tooltipRef = React.createRef<HTMLSpanElement>();

  onMouseEnter = () => {
    this.setState({ append: true }, () => {
      const { marginLeft, marginTop } = this.getTooltipPosition();

      this.setState({ show: true, marginLeft, marginTop }); //show: true,
    });
  };

  onMouseLeave = () => {
    this.setState({ append: false, show: false });
  };

  getTooltipPosition = () => {
    const { placement } = this.props;
    const wrapperNode = this.wrapperRef && this.wrapperRef.current;
    const tooltipNode = this.tooltipRef && this.tooltipRef.current;

    if (!wrapperNode || !tooltipNode) {
      return { marginLeft: 0, marginTop: 0 };
    }

    let marginLeft = 0,
      marginTop = 0;

    if (placement === "top") {
      marginTop = 0 - tooltipNode.clientHeight - MARGIN_TOOLTIP_TO_WRAPPER_PX;
      marginLeft = Math.abs(
        (wrapperNode.clientWidth - tooltipNode.clientWidth) / 2
      );
    }

    if (placement === "left") {
      marginTop = (wrapperNode.clientHeight - tooltipNode.clientHeight) / 2;
      marginLeft = -tooltipNode.clientWidth - MARGIN_TOOLTIP_TO_WRAPPER_PX;
    }

    if (placement === "right") {
      marginTop = (wrapperNode.clientHeight - tooltipNode.clientHeight) / 2;
      marginLeft = wrapperNode.clientWidth + MARGIN_TOOLTIP_TO_WRAPPER_PX;
    }

    if (placement === "bottom") {
      marginTop = wrapperNode.clientHeight + MARGIN_TOOLTIP_TO_WRAPPER_PX;
      marginLeft = Math.abs(
        (wrapperNode.clientWidth - tooltipNode.clientWidth) / 2
      );
    }

    return { marginLeft, marginTop };
  };

  render() {
    const { children, placement, title } = this.props;
    const { show, append, marginLeft, marginTop } = this.state;

    return (
      <StyledWrapper
        ref={this.wrapperRef}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        {children}
        {append && (
          <StyledTooltip
            ref={this.tooltipRef}
            placement={placement}
            show={show}
            marginLeft={marginLeft}
            marginTop={marginTop}
          >
            {title}
          </StyledTooltip>
        )}
      </StyledWrapper>
    );

    // todo if wanting tooltip without extra span, just finish ref forwarding to get child coords for tooltip
    // const child = React.isValidElement(children) ? (
    //   children
    // ) : (
    //   <span>{children}</span>
    // );
    // const elementToRender = React.cloneElement(child, {
    //   onMouseEnter: this.onMouseEnter,
    //   onMouseLeave: this.onMouseLeave,
    //   ref: this.clonedElement
    // });
    //
    // return (
    //   <>
    //     {elementToRender}
    //     {show && <StyledTooltip>tooltip</StyledTooltip>}
    //   </>
    // );
  }
}

export default Tooltip;
