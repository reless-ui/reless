import * as ReactDOM from "react-dom";
import * as React from "react";
import NotificationWrapper, {
  NotificationItemProps
} from "./NotificationWrapper";

let activeNotifications: any[] = [];

let wrapperRef: any;

const createNotification = (createNotificationArgs: NotificationItemProps) => {
  const {
    content,
    duration,
    onClose,
    key,
    type,
    placement,
    size,
    title,
    description
  } = createNotificationArgs;

  if (activeNotifications.length === 0) {
    createNotificationsWrapper();
  }
  activeNotifications.push(createNotificationArgs);

  setTimeout(() => {
    wrapperRef.addNotification({
      type,
      content,
      duration,
      onClose,
      key,
      placement,
      size,
      title,
      description
    });
  }, 40);
};

const createNotificationsWrapper = () => {
  const div = document.createElement("div");
  document.body.appendChild(div);

  wrapperRef = ReactDOM.render(<NotificationWrapper ref={wrapperRef} />, div);
};

export default createNotification;
