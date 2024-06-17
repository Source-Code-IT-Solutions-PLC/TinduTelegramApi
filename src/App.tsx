import { ConfigProvider } from "antd";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { RouteName } from "constants/route";
import Login from "pages/Auth/Login";
import ForgotPassword from "pages/Auth/ForgotPassword";
import { NotificationContextProvider } from "contexts/NotificationContext";
import MainLayout from "layouts/MainLayout";
import Account from "pages/AccountPages/Account";
import { DataLoadingContextProvider } from "contexts/DataLoadingContext";
import CreateAccount from "pages/AccountPages/CreateAccount";
import EditAccount from "pages/AccountPages/EditAccount";
import AccountDetail from "pages/AccountPages/AccountDetail";
import Statistics from "pages/AccountPages/Account/components/Statistics";
import Transactions from "pages/AccountPages/Account/components/Transactions"
function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "rgb(30,30,30)",
        },
        components: {
          Input: {
            boxShadow: "0 0 0 1px rgba(3, 3, 3, 0.3)",
            activeShadow: "0 0 0 1px rgba(3, 3, 3, 0.5)",
          },
          Select: {
            boxShadow: "0 0 0 1px rgba(3, 3, 3, 0.64)",
            boxShadowSecondary: "0 0 0 1px rgba(3, 3, 3, 0.64)",
            boxShadowTertiary: "0 0 0 1px rgba(3, 3, 3, 0.64)",
          },
        },
      }}
    >
      <NotificationContextProvider>
        <DataLoadingContextProvider>
          <BrowserRouter>
            <Routes>
              <Route
                path={"/"}
                element={<Navigate to={RouteName.LOGIN} />}
                index
              />
              <Route path={RouteName.LOGIN} Component={Login} index />
              <Route
                path={RouteName.FORGOT_PASSWORD}
                Component={ForgotPassword}
              />
              <Route Component={MainLayout}>
                <Route path={RouteName.ACCOUNT} Component={Account} />
                <Route
                  path={RouteName.CREATE_ACCOUNT}
                  Component={CreateAccount}
                />
                <Route path={RouteName.EDIT_ACCOUNT} Component={EditAccount} />
                <Route
                  path={RouteName.ACCOUNT_DETAIL}
                  Component={AccountDetail}
                />
                <Route 
                    path={RouteName.Statistics}
                    Component={Statistics}
                    />
                <Route 
                    path={RouteName.Transactions}
                    Component={Transactions}
                    />
                <Route path={"*"} element={<>Page not found</>} />
              </Route>
            </Routes>
          </BrowserRouter>
        </DataLoadingContextProvider>
      </NotificationContextProvider>
    </ConfigProvider>
  );
}

export default App;
