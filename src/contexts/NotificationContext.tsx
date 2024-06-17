import { notification } from "antd";
import { ReactNode, createContext, useContext } from "react";

interface INotificationProps {
  showError: (message: string) => void;
  showSuccess: (message: string) => void;
}

export const NotificationContext = createContext<INotificationProps>(
  {} as INotificationProps
);

export const useNotificationContext = () =>
  useContext<INotificationProps>(NotificationContext);

export function NotificationContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [api, contextHolder] = notification.useNotification();
  const showError = (message: string) => api.error({ message });
  const showSuccess = (message: string) => api.success({ message });

  return (
    <NotificationContext.Provider value={{ showError, showSuccess }}>
      {contextHolder}
      {children}
    </NotificationContext.Provider>
  );
}
