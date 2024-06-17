import { Modal, Button } from "antd";
import { banAccountApi } from "api/account";
import WarningIcon from "components/Icons/WarningIcon";
import { useNotificationContext } from "contexts/NotificationContext";
import { IAccount } from "models/account";
import { useState } from "react";

interface IProp {
  open: boolean;
  account: IAccount;
  handleClose: () => void;
  reload: () => void;
}

export default function BanModal({
  open,
  account,
  handleClose,
  reload,
}: IProp) {
  const [loading, setLoading] = useState<boolean>(false);
  const { showError, showSuccess } = useNotificationContext();

  const handleBan = async () => {
    setLoading(true);
    const { data, error } = await banAccountApi(account._id);
    if (data) {
      showSuccess("Account banned successfully");
      reload();
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
          You're about to ban {account.chatId} {account.name}
        </p>
        <div className="w-full flex mt-7 items-center justify-end gap-x-3">
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleBan} loading={loading} type="primary" danger>
            Ban
          </Button>
        </div>
      </div>
    </Modal>
  );
}
