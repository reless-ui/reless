import * as React from "react";
import styled from "styled-components";
import { ReactChild } from "react";
import withTheme from "../withTheme";
import { Theme } from "../ThemeProvider/themeProvider";
import Container from "../Container";

const StyledComplexLayout = styled.div`
  height: 100vh;

  flex-direction: column;
  display: flex;
`;

const StyledComplexLayoutHeaderWrapper: any = styled.div`
  ${(props: any) =>
    props.sticky &&
    `
    position: sticky;
    top: 0;
    }
`};
`;

StyledComplexLayoutHeaderWrapper.defaultProps = {
  "data-id": "StyledComplexLayoutHeaderWrapper"
};

const StyledComplexLayoutHeader: any = styled.div``;

const StyledComplexLayoutSubHeader = styled.div`
  border: 1px solid black;
`;

const StyledComplexLayoutContentWrapper = styled.div`
  display: flex;
  flex: 1;
`;

const StyledComplexLayoutLeftSider = styled.div`
  min-width: 200px;
`;

const StyledComplexLayoutLeftSiderFixed = styled.div`
  position: fixed;
  flex: 1;
`;

const StyledComplexLayoutContent = styled.div`
  border: 1px solid black;
  flex-grow: 1;
`;

const StyledComplexLayoutRightSider = styled.div`
  border: 1px solid black;
  min-width: 200px;
`;

const StyledComplexLayoutFooter = styled.div`
  border: 1px solid black;
  min-width: 200px;
`;

export type LayoutConfig = {
  header: {
    sticky: boolean;
    aboveContent: boolean;
  };
  leftSider: {
    overlayHeader: boolean;
    fixed: boolean;
  };
  rightSider: {
    overlayHeader: boolean;
  };
  footer: {
    underContent: boolean;
  };
};

export interface ComplexLayoutProps {
  header?: ReactChild;
  subHeader?: ReactChild;
  leftSider?: ReactChild;
  rightSider?: ReactChild;
  footer?: ReactChild;
  layoutConfig: LayoutConfig;
  theme: Theme;
}

interface ComplexLayoutState {
  loading?: boolean | { delay?: number };
  hasTwoCNChar: boolean;
}

class ComplexLayout extends React.Component<
  ComplexLayoutProps,
  ComplexLayoutState
> {
  public static defaultProps = {
    layoutConfig: {
      header: {
        sticky: false,
        aboveContent: true
      },
      leftSider: {
        fixed: false
      },
      rightSider: {},
      footer: {
        underContent: true
      }
    }
  };

  render() {
    const {
      children,
      header,
      subHeader,
      layoutConfig,
      leftSider,
      rightSider,
      footer,
      theme
    } = this.props;

    const headerAndSubheader = (header || subHeader) && (
      <StyledComplexLayoutHeaderWrapper sticky={layoutConfig.header.sticky}>
        {header && (
          <StyledComplexLayoutHeader>{header}</StyledComplexLayoutHeader>
        )}
        {subHeader && (
          <StyledComplexLayoutSubHeader>
            {subHeader}
          </StyledComplexLayoutSubHeader>
        )}
      </StyledComplexLayoutHeaderWrapper>
    );

    const footerWrapped = footer && (
      <StyledComplexLayoutFooter>{footer}</StyledComplexLayoutFooter>
    );

    const contentWrapped = (
      <StyledComplexLayoutContentWrapper>
        {leftSider && (
          <StyledComplexLayoutLeftSider>
            {layoutConfig.leftSider.fixed ? (
              <StyledComplexLayoutLeftSiderFixed>
                {leftSider}
              </StyledComplexLayoutLeftSiderFixed>
            ) : (
              leftSider
            )}
          </StyledComplexLayoutLeftSider>
        )}
        <StyledComplexLayoutContent>
          {!layoutConfig.header.aboveContent && headerAndSubheader}
          {children}
          {!layoutConfig.footer.underContent && footerWrapped}
        </StyledComplexLayoutContent>
        {rightSider && (
          <StyledComplexLayoutRightSider>
            {rightSider}
          </StyledComplexLayoutRightSider>
        )}
      </StyledComplexLayoutContentWrapper>
    );

    const wholeLayout = (
      <StyledComplexLayout>
        {layoutConfig.header.aboveContent && headerAndSubheader}
        {theme && theme.general && theme.general.centered ? (
          <Container>{contentWrapped}</Container>
        ) : (
          contentWrapped
        )}
        {layoutConfig.footer.underContent && footerWrapped}
      </StyledComplexLayout>
    );

    return wholeLayout;
  }
}

export default withTheme(ComplexLayout);
