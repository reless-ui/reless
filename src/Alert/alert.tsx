import * as React from "react";
import styled from "styled-components";
import colors from "../styles/colors";
import Icon from "../Icon";

const ALERT_TYPES_TO_BACKGROUND_COLORS = {
  success: colors.greenLight,
  info: colors.blueLight,
  warning: colors.orangeLight,
  danger: colors.redLight
};

const ALERT_TYPES_TO_BORDER_COLORS = {
  success: colors.green,
  info: colors.blue,
  warning: colors.orange,
  danger: colors.red
};

const ALERT_TYPES_TO_ICON_TYPES = {
  success: "check-circle",
  info: "info",
  warning: "exclamation",
  danger: "exclamation-triangle"
};

const StyledDiv: any = styled.div`
  padding: 12px 15px;
  border-radius: 4px;
  border: 1px solid ${(props: any) => ALERT_TYPES_TO_BORDER_COLORS[props.type]};
  background-color: ${(props: any) =>
    ALERT_TYPES_TO_BACKGROUND_COLORS[props.type]};
  display: flex;
  transition: all 0.5s;
  overflow: hidden;

  ${(props: any) =>
    !props.show &&
    `
    // opacity: 0;
    max-height: 0px;
    padding:0px;
    border-width: 0px;
  `}
`;

const StyledIconDiv: any = styled.div`
  margin-right: 15px;
`;

const StyledContent: any = styled.div`
  display: block;
  flex-grow: 1;
`;

const StyledMessage: any = styled.div`
  font-size: 16px;
`;

const StyledDescription: any = styled.div`
  padding-top: 6px;
  font-size: 14px;
`;

const StyledClose: any = styled.span`
  cursor: pointer;
`;

type AlertTypes = "success" | "info" | "warning" | "danger";

interface AlertProps {
  type: AlertTypes;
  closable?: boolean;
  icon?: boolean | string | React.ReactChild;
  onClose?: () => void;
  message: string;
  description?: string;
}

interface AlertState {
  show: boolean;
}

class Alert extends React.Component<AlertProps, AlertState> {
  public static defaultProps = {
    type: "info",
    closable: false,
    icon: false,
    message: "",
    description: ""
  };

  state = { show: true };

  hideAlert = () => {
    this.setState({ show: false });

    if (this.props.onClose) {
      this.props.onClose();
    }
  };

  render() {
    const { type, closable, icon, message, description } = this.props;
    const { show } = this.state;

    return (
      <StyledDiv {...this.props} type={type} show={show}>
        {icon && (
          <StyledIconDiv>
            <Icon type={ALERT_TYPES_TO_ICON_TYPES[type]} />
          </StyledIconDiv>
        )}
        <StyledContent {...this.props} type={type}>
          {message && <StyledMessage>{message}</StyledMessage>}
          {description && <StyledDescription>{description}</StyledDescription>}
        </StyledContent>
        {closable && <StyledClose onClick={this.hideAlert}>X</StyledClose>}
      </StyledDiv>
    );
  }
}

export default Alert;
