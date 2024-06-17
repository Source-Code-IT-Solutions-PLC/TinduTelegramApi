import { Modal, Button } from "antd";
import { activateAccountApi } from "api/account";
import WarningIcon from "components/Icons/WarningIcon";
import { useDataLoadingContext } from "contexts/DataLoadingContext";
import { useNotificationContext } from "contexts/NotificationContext";
import { IAccount } from "models/account";
import { useState } from "react";

interface IProp {
  open: boolean;
  account: IAccount;
  handleClose: () => void;
}

export default function ActivateModal({ open, account, handleClose }: IProp) {
  const [loading, setLoading] = useState<boolean>(false);
  const { showError, showSuccess } = useNotificationContext();
  const { loadAccounts } = useDataLoadingContext();

  const handleActivate = async () => {
    setLoading(true);
    const { data, error } = await activateAccountApi(account._id);
    if (data) {
      showSuccess("Account activated successfully");
      loadAccounts();
    } else showError(error!.message);
    setLoading(false);
    handleClose();
  };

  return (
    <Modal open={open} title={null} footer={null} closeIcon={null} centered>
      <div className="w-full text-center">
        <div className="w-full text-orange-400 text-9xl flex justify-center my-6">
          <WarningIcon />
        </div>
        <h3 className="text-3xl font-semibold my-4">Are you sure?</h3>
        <p
          className="font-normal text-base"
          style={{ color: "rgba(0,0,0,.64)" }}
        >
          You're about to activate {account.chatId} {account.name}
        </p>
        <div className="w-full flex mt-7 items-center justify-end gap-x-3">
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleActivate} loading={loading} type="primary">
            Activate
          </Button>
        </div>
      </div>
    </Modal>
  );
}
