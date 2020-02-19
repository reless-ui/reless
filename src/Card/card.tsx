import * as React from "react";
import styled from "styled-components";
import { ReactChild } from "react";

const StyledCard = styled.div`
  background-color: white;
  color: black;
  // border: 1px solid black;
  border-radius: 5px;
  // margin: 15px;
  border: 1px solid #edf2f9;
  box-shadow: 0 0.75rem 1.5rem rgba(18, 38, 63, 0.03);
`;

const StyledCardHeader = styled.div`
  border-bottom: 1px solid #edf2f9;
  padding: 15px;
  box-shadow: 0 0.75rem 1.5rem rgba(18, 38, 63, 0.03);
  display: flex;
  align-items: center;
`;

const StyledCardHeaderTitle = styled.div`
  flex-grow: 1;
`;

const StyledCardHeaderTitleExtra = styled.div`
  // flex: 0 0 auto;
  width: auto;
  max-width: 100%;
`;

const StyledCardBody = styled.div`
  padding: 15px;
`;

const StyledTitleExtraTabList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  margin-top: 1px;
  padding-right: 15px;
`;

const StyledTitleExtraTabListItem: any = styled.li`
  margin-left: 5px;
  margin-right: 5px;
  border-bottom: ${(props: any) => (props.active ? "1px solid red" : "none")};
`;

type TitleExtraTabElement = {
  label: string;
  key: string;
};

interface CardProps {
  title?: string | React.Component;
  titleExtra?: string | ReactChild;
  titleExtraTabList?: TitleExtraTabElement[];
  activeTabKey?: string;
}

interface CardState {}

class Card extends React.Component<CardProps, CardState> {
  render() {
    const {
      children,
      title,
      titleExtra,
      titleExtraTabList,
      activeTabKey
    } = this.props;

    return (
      <StyledCard>
        {title && (
          <StyledCardHeader>
            <StyledCardHeaderTitle>{title}</StyledCardHeaderTitle>
            {titleExtraTabList && (
              <StyledTitleExtraTabList>
                {titleExtraTabList.map(item => (
                  <StyledTitleExtraTabListItem
                    key={item.key}
                    active={item.key === activeTabKey}
                  >
                    {item.label}
                  </StyledTitleExtraTabListItem>
                ))}
              </StyledTitleExtraTabList>
            )}
            {titleExtra && (
              <StyledCardHeaderTitleExtra>
                {titleExtra}
              </StyledCardHeaderTitleExtra>
            )}
          </StyledCardHeader>
        )}
        <StyledCardBody>{children}</StyledCardBody>
      </StyledCard>
    );
  }
}

export default Card;
