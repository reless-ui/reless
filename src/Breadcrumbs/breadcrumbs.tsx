import * as React from "react";
import styled from "styled-components";
import colors from "../styles/colors";

const StyledBreadcrumbs = styled.div``;

const StyledBreadcrumbsItem = styled.span`
  color: ${colors.textLight};
  font-size: 12px;
`;

const StyledBreadcrumbsSeparator = styled.span`
  color: ${colors.textLight};
  font-size: 12px;
  margin: 0 5px;
`;

export interface BreadcrumbsProps {
  routes: { title: string; path: string }[];
  itemRender?: any | React.Component;
  separator?: string | React.Component;
}

interface BreadcrumbsState {}

class Breadcrumbs extends React.Component<BreadcrumbsProps, BreadcrumbsState> {
  public static defaultProps = {
    separator: "/"
  };

  render() {
    const { routes, separator } = this.props;
    // console.log("itemRender", itemRender);

    return (
      <StyledBreadcrumbs>
        {routes.map((route, index) => (
          <>
            <StyledBreadcrumbsItem>{route.title}</StyledBreadcrumbsItem>
            {index + 1 < routes.length && (
              <StyledBreadcrumbsSeparator>
                {separator}
              </StyledBreadcrumbsSeparator>
            )}
          </>
        ))}
      </StyledBreadcrumbs>
    );
  }
}

export default Breadcrumbs;
