import styled from "styled-components";
import * as React from "react";
import { NotificationItemProps } from "./NotificationWrapper";
import Icon from "../Icon";
import colors from "../styles/colors";

const NOTIFICATION_TYPES_TO_ICON_TYPES = {
  success: "check-circle",
  info: "info",
  warning: "exclamation",
  danger: "exclamation-triangle",
  error: "exclamation-triangle",
  loading: "loading"
};

const StyledNotificationItem = styled.div`
  padding: 6px 12px;
  border: 1px solid ${colors.borderLight};
  box-shadow: 0 0.75rem 1.5rem rgba(18, 38, 63, 0.03);
  border-radius: 4px;

  margin: 3px 3px 14px 3px;
  background-color: white;
  display: flex;
`;

const StyledContent = styled.div`
  flex-grow: 1;
`;

const StyledTitle = styled.div`
  font-weight: bold;
`;

const StyledDescription = styled.div``;

export default (props: NotificationItemProps) => {
  console.log("item", props);
  const { content, title, description, type } = props;
  return (
    <StyledNotificationItem>
      <Icon type={NOTIFICATION_TYPES_TO_ICON_TYPES[type]} />
      <StyledContent>
        {content ? (
          content
        ) : (
          <>
            <StyledTitle>{title}</StyledTitle>
            {description && (
              <StyledDescription>{description}</StyledDescription>
            )}
          </>
        )}
      </StyledContent>
    </StyledNotificationItem>
  );
};
