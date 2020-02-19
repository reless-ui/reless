import * as React from "react";
import styled from "styled-components";
import colors from "../styles/colors";

const TEXTAREA_DEFAULT_PADDING_TOP_PLUS_BOTTOM_PX = 4;

const StyledTextArea: any = styled.textarea`
  border: 1px solid ${colors.borderLight};
  transition: all 1s;
  overflow: hidden;
  resize: none;
  white-space: normal;
  border-radius: 4px;
`;

interface TextAreaProps {
  style?: React.StyleHTMLAttributes<{}>;
}

interface TextAreaState {
  height: number;
}

class TextArea extends React.Component<TextAreaProps, TextAreaState> {
  public static defaultProps = {};

  state = { height: 0 };

  onChange = (e: React.FormEvent) => {
    this.setState({
      height:
        e.currentTarget.scrollHeight -
        TEXTAREA_DEFAULT_PADDING_TOP_PLUS_BOTTOM_PX
    });
  };

  render() {
    const { style } = this.props;
    const { height } = this.state;

    return (
      <StyledTextArea
        {...this.props}
        onChange={this.onChange}
        style={height ? { height, ...style } : style}
      />
    );
  }
}

export default TextArea;
