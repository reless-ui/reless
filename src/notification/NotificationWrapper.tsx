import * as React from "react";
import NotificationItem from "./NotificationItem";
import styled, { css } from "styled-components";
import { makeid } from "../utils/functions";
import { ReactChild } from "react";

const StyledNotificationWrapperTop = css`
  position: fixed;
  top: 24px;
  left: 50%;
  margin-left: -125px;
`;

const StyledNotificationWrapperTopRight = css`
  position: fixed;
  top: 24px;
  right: 24px;
`;

const StyledNotificationWrapperBottom = css`
  position: fixed;
  bottom: 24px;
  left: 50%;
  margin-left: -125px;
`;

const StyledNotificationWrapperBottomLeft = css`
  position: fixed;
  bottom: 24px;
  left: 24px;
`;

const StyledNotificationWrapper: any = styled.div`
  width: 250px;
  
  ${(props: any) => props.placement === "top" && StyledNotificationWrapperTop}
  ${(props: any) =>
    props.placement === "topRight" && StyledNotificationWrapperTopRight}
  ${(props: any) =>
    props.placement === "bottom" && StyledNotificationWrapperBottom}
  ${(props: any) =>
    props.placement === "bottomLeft" && StyledNotificationWrapperBottomLeft}
`;

type NotificationPlacement = "top" | "bottom" | "topRight" | "bottomLeft";
type NotificationType = "success" | "info" | "warning" | "error" | "loading";

export interface NotificationItemProps {
  content?: ReactChild;
  title?: string;
  description?: string;
  duration?: number;
  onClose?: () => void;
  key?: string;
  type: NotificationType;
  placement: NotificationPlacement;
  size: "small" | "large";
}

interface NotificationWrapperProps {}

interface NotificationWrapperState {
  listNotifications?: NotificationItemProps[];
}

export default class NotificationWrapper extends React.Component<
  NotificationWrapperProps,
  NotificationWrapperState
> {
  state = {
    listNotifications: []
  };

  getNotifications = (placement: NotificationPlacement) => {
    return this.state.listNotifications.filter(
      (notification: NotificationItemProps) =>
        notification.placement === placement
    );
  };

  addNotification = (messageDefinition: NotificationItemProps) => {
    if (!messageDefinition.key) {
      messageDefinition.key = makeid(3);
    }

    this.setState({
      listNotifications: [...this.state.listNotifications, messageDefinition]
    });

    setTimeout(
      () => this.removeNotification(messageDefinition.key),
      (messageDefinition.duration || 3) * 1000
    );
  };

  removeNotification = (key: string | undefined) => {
    this.setState({
      listNotifications: this.state.listNotifications.filter(
        (message: NotificationItemProps) => message.key !== key
      )
    });
  };

  render() {
    const { listNotifications } = this.state;

    console.log("listNotifications", listNotifications);

    const bottomLeftNotifications = this.getNotifications("bottomLeft");
    const topNotifications = this.getNotifications("top");
    const topRightNotifications = this.getNotifications("topRight");
    const bottomNotifications = this.getNotifications("bottom");

    return (
      <>
        {topNotifications.length > 0 && (
          <StyledNotificationWrapper placement={"top"}>
            {topNotifications.map((notification: NotificationItemProps) => (
              <NotificationItem {...notification} />
            ))}
          </StyledNotificationWrapper>
        )}
        {bottomLeftNotifications.length > 0 && (
          <StyledNotificationWrapper placement={"bottomLeft"}>
            {bottomLeftNotifications
              .reverse()
              .map((notification: NotificationItemProps) => (
                <NotificationItem {...notification} />
              ))}
          </StyledNotificationWrapper>
        )}
        {topRightNotifications.length > 0 && (
          <StyledNotificationWrapper placement={"topRight"}>
            {topRightNotifications.map(
              (notification: NotificationItemProps) => (
                <NotificationItem {...notification} />
              )
            )}
          </StyledNotificationWrapper>
        )}
        {bottomNotifications.length > 0 && (
          <StyledNotificationWrapper placement={"bottom"}>
            {bottomNotifications
              .reverse()
              .map((notification: NotificationItemProps) => (
                <NotificationItem {...notification} />
              ))}
          </StyledNotificationWrapper>
        )}
      </>
    );
  }
}
