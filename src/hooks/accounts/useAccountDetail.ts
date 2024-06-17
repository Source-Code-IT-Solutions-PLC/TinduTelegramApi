import { useEffect, useState } from "react";
import { useNotificationContext } from "contexts/NotificationContext";
import { useLocation, useParams } from "react-router-dom";
import { IAccount } from "models/account";
import { fetchAccountAllApi, fetchAccountByIdApi } from "api/account";

export default function useAccountDetail() {
  const state = useLocation().state;
  const id: string = useParams().id!;
  const { showError } = useNotificationContext();
  const [openBan, setOpenBan] = useState<boolean>(false);
  const [openActivate, setOpenActivate] = useState<boolean>(false);
  const [data, setData] = useState<{ loading: boolean; data?: IAccount }>({
    loading: true,
  });

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [id]);

  const fetchData = async () => {
    setData({ loading: false, data: state as any });
    // setData({ loading: true });
    // const { data, error } = await fetchAccountAllApi();
    // if (data) {
    //   setData({ loading: false, data });
    // } else showError(error!.message);
  };

  const handleOpenBan = () => setOpenBan(true);
  const handleCloseBan = () => setOpenBan(false);
  const handleOpenActivate = () => setOpenActivate(true);
  const handleCloseActivate = () => setOpenActivate(false);

  return {
    data,
    handleCloseActivate,
    handleCloseBan,
    handleOpenActivate,
    handleOpenBan,
    openActivate,
    openBan,
    fetchData,
  };
}
