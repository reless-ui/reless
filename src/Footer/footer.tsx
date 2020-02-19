import * as React from "react";
import styled, { withTheme } from "styled-components";
import { ReactChild } from "react";
import Container from "../Container";
import { layoutPageMargins } from "../utils/commonStyles";

const StyledFooter = styled.div`
  ${layoutPageMargins}
  padding-bottom: 70px;
  margin-bottom: 0;
  background-color: ${(props: any) => props.theme.colors.backgroundSecondary};
`;

interface FooterProps {
  children: string | ReactChild;
  theme?: any;
}

interface FooterState {}

class Footer extends React.Component<FooterProps, FooterState> {
  public static defaultProps = {};

  render() {
    const { children, theme } = this.props;

    return (
      <StyledFooter>
        <Container fluid={!theme.general.centered}>{children}</Container>
      </StyledFooter>
    );
  }
}

export default withTheme(Footer);
