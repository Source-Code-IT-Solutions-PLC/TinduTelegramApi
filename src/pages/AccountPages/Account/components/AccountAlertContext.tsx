import { IAccount } from "models/account";
import { ReactNode, createContext, useContext, useState } from "react";
import BanModal from "./BanModal";
import ActivateModal from "./ActivateModal";

interface IAccountAlertProps {
  showBan: (account: IAccount) => void;
  showActivate: (account: IAccount) => void;
}

export const AccountAlertContext = createContext<IAccountAlertProps>(
  {} as IAccountAlertProps
);

export const useAccountAlertContext = () =>
  useContext<IAccountAlertProps>(AccountAlertContext);

interface IOpen {
  open: boolean;
  account: IAccount | null;
}

export function AccountAlertContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [openBan, setOpenBan] = useState<IOpen>({ open: false, account: null });
  const [openActivate, setOpenActivate] = useState<IOpen>({
    open: false,
    account: null,
  });

  const showBan = (account: IAccount) => setOpenBan({ open: true, account });
  const showActivate = (account: IAccount) =>
    setOpenActivate({ open: true, account });

  const handleCloseBan = () => setOpenBan({ open: false, account: null });
  const handleCloseActivate = () =>
    setOpenActivate({ open: false, account: null });

  return (
    <AccountAlertContext.Provider
      value={{
        showActivate,
        showBan,
      }}
    >
      {openBan.account && (
        <BanModal
          open={openBan.open}
          account={openBan.account}
          handleClose={handleCloseBan}
        />
      )}

      {openActivate.account && (
        <ActivateModal
          open={openActivate.open}
          account={openActivate.account}
          handleClose={handleCloseActivate}
        />
      )}
      {children}
    </AccountAlertContext.Provider>
  );
}
