import * as React from "react";
import styled, { withTheme } from "styled-components";
import { ReactChild } from "react";
import { darken } from "polished";

const StyledTabbed = styled.div`
  border: 1px solid ${(props: any) => props.theme.colors.backgroundSecondary};
  display: flex;
`;

const StyledTabbedTabs = styled.div`
  border: 1px solid ${(props: any) => props.theme.colors.backgroundSecondary};
  min-width: 20%;
  max-width: 33%;
`;

const StyledTabbedTabsTab: any = styled.div`
  border-bottom: 1px solid
    ${(props: any) => darken(0.03, props.theme.colors.backgroundSecondary)};
  background-color: ${(props: any) =>
    props.active
      ? darken(0.03, props.theme.colors.backgroundSecondary)
      : props.theme.colors.backgroundSecondary};
  padding: 10px 15px;
  cursor: pointer;
  &:hover {
    background-color: ${(props: any) =>
      darken(0.03, props.theme.colors.backgroundSecondary)};
    transition: background-color 300ms linear;
  }
  &:last-child {
    border-bottom: none;
  }
`;

const StyledTabbedContent = styled.div`
  border: 1px solid ${(props: any) => props.theme.colors.backgroundSecondary};
  flex-grow: 1;
  padding: 15px;
`;

interface TabbedContentProps {
  tabsPosition?: "left" | "top";
  tabsTitles: string[];
  tabsContents: ReactChild[];
  theme?: any;
}

interface TabbedContentState {}

class TabbedContent extends React.Component<
  TabbedContentProps,
  TabbedContentState
> {
  public static defaultProps = {};

  state = {
    activeTabIndex: 0
  };

  switchTab = (tabIndex: number) => {
    this.setState({ activeTabIndex: tabIndex });
  };

  render() {
    // @ts-ignore
    const { tabsPosition, tabsTitles, tabsContents } = this.props;
    const { activeTabIndex } = this.state;

    return (
      <StyledTabbed>
        <StyledTabbedTabs>
          {tabsTitles.map((tabTitle, tabIndex) => (
            <StyledTabbedTabsTab
              onClick={() => this.switchTab(tabIndex)}
              active={tabIndex === activeTabIndex}
            >
              {tabTitle}
            </StyledTabbedTabsTab>
          ))}
        </StyledTabbedTabs>
        <StyledTabbedContent>{tabsContents[activeTabIndex]}</StyledTabbedContent>
      </StyledTabbed>
    );
  }
}

export default withTheme(TabbedContent);
