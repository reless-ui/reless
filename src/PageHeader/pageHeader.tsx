import * as React from "react";
import styled from "styled-components";
import colors from "../styles/colors";

import Breadcrumbs from "../Breadcrumbs";
import { BreadcrumbsProps } from "../Breadcrumbs/breadcrumbs";
import { ReactChild } from "react";

const StyledPageHeader = styled.div`
  color: black;

  margin: 15px 0 15px 0;
  border-bottom: 1px solid #edf2f9;
  padding-bottom: 10px;
`;

const StyledPageSubtitle = styled.span`
  font-size: 12px;
  color: ${colors.textLight};
  letter-spacing: 0.08em;
`;

const StyledPageH1Wrapper = styled.div`
  display: flex;
`;

const StyledPageH1 = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 500;
  flex-grow: 1;
  display: flex;
  align-items: center;
`;

const StyledTags = styled.div`
  margin-left: 20px;
  display: inline-flex;
`;

const StyledExtra = styled.div`
  max-width: 100%;
`;

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  subtitlePosition?: "top" | "right" | "bottom";
  breadcrumbs?: BreadcrumbsProps;
  breadcrumbsPosition?: "top" | "right" | "bottom";
  extra?: ReactChild;
  tags?: ReactChild[];
}

interface PageHeaderState {}

class PageHeader extends React.Component<PageHeaderProps, PageHeaderState> {
  public static defaultProps = {
    subtitlePosition: "top",
    breadcrumbsPosition: "top"
  };

  render() {
    const {
      title,
      subtitle,
      subtitlePosition,
      breadcrumbs,
      breadcrumbsPosition,
      extra,
      tags
    } = this.props;

    const subtitleSpan = subtitle && (
      <StyledPageSubtitle>{subtitle}</StyledPageSubtitle>
    );

    const breadcrumbsComponent = breadcrumbs && (
      <Breadcrumbs {...breadcrumbs} />
    );

    return (
      <StyledPageHeader>
        {breadcrumbs && breadcrumbsPosition === "top" && breadcrumbsComponent}
        {subtitle && subtitlePosition === "top" && subtitleSpan}
        <StyledPageH1Wrapper>
          <StyledPageH1>
            {title}
            {tags && <StyledTags>{tags}</StyledTags>}
          </StyledPageH1>
          {extra && <StyledExtra>{extra}</StyledExtra>}
        </StyledPageH1Wrapper>
        {subtitle && subtitlePosition === "bottom" && subtitleSpan}
        {breadcrumbs &&
          breadcrumbsPosition === "bottom" &&
          breadcrumbsComponent}
      </StyledPageHeader>
    );
  }
}

export default PageHeader;
