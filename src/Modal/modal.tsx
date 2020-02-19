import * as React from "react";
import * as ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components";
import { ReactChild } from "react";
import colors from "../styles/colors";
import Button from "../Button";

const fadeIn = keyframes`
  from {
    transform: scale(0.2);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const StyledWrapper: any = styled.div`
  background-color: black;
  opacity: 0.3;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

const StyledContent: any = styled.div`
  display: block;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transition: all 1s;
  animation: ${fadeIn} 0.5s;
  transform-origin: -50px -50px;
  width: 300px;
  max-width: 90%;
  opacity: 1;
  border-radius: 10px;
  margin-top: -150px;
  margin-left: -150px;
`;

const StyledTitle: any = styled.div`
  padding: 16px 24px;
  font-size: 16px;
  font-weight: 500;
  border-bottom: 1px solid ${colors.borderLight};
`;

const StyledBody: any = styled.div`
  padding: 24px;
`;

const StyledFooter: any = styled.div`
  padding: 10px 16px;
  border-top: 1px solid ${colors.borderLight};
  text-align: right;
`;

let mousePosition: { x: number; y: number } | undefined;

const getClickPosition = (e: MouseEvent) => {
  console.log("kliknul", e.pageX, " a y", e.pageY);
  mousePosition = {
    x: e.pageX,
    y: e.pageY
  };
  setTimeout(() => (mousePosition = undefined), 100);
};

if (
  typeof window !== "undefined" &&
  window.document &&
  window.document.documentElement
) {
  window.addEventListener("click", getClickPosition);
}

interface ModalProps {
  show: boolean;
  onCancel?: () => void;
  onOk?: () => void;
  title?: string;
  closable?: boolean;
  children: ReactChild;
  okText?: string | ReactChild;
  cancelText?: string | ReactChild;
  footer?: string | ReactChild;
}

interface ModalState {
  left: number;
  top: number;
}

class Modal extends React.Component<ModalProps, ModalState> {
  public static defaultProps = {
    show: false,
    closable: true,
    okText: "OK",
    cancelText: "Cancel"
  };

  state = { left: 0, top: 0 };

  componentDidMount() {
    setTimeout(() => {
      if (mousePosition) {
        this.setState({ top: mousePosition.y, left: mousePosition.x });
        setTimeout(() => this.setState({ top: 100, left: 100 }), 1000);
      }
    }, 50);
  }

  static showModal = (props: ModalProps) => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    ReactDOM.render(<Modal show={true} {...props} />, div);
  };

  render() {
    const {
      show,
      children,
      title,
      okText,
      cancelText,
      footer,
      onCancel,
      onOk
    } = this.props;
    const { left, top } = this.state;

    if (!show) {
      return null;
    }

    return (
      <div style={{ position: "fixed", left: 0, top: 0, right: 0, bottom: 0 }}>
        <StyledWrapper onClick={onCancel} />
        <StyledContent left={left} top={top}>
          {title && <StyledTitle>{title}</StyledTitle>}
          <StyledBody>{children}</StyledBody>
          {footer !== null && (
            <StyledFooter>
              <Button color="danger" onClick={onCancel}>
                {cancelText}
              </Button>
              <Button color="primary" onClick={onOk}>
                {okText}
              </Button>
            </StyledFooter>
          )}
        </StyledContent>
      </div>
    );
  }
}

export default Modal;
