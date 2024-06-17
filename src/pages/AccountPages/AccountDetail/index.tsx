import { Button, Spin,Image } from "antd";
import BanIcon from "components/Icons/BanIcon";
import EditIcon from "components/Icons/EditIcon";
import { statusBadge } from "components/Table";
import { RouteName } from "constants/route";
import useAccountDetail from "hooks/accounts/useAccountDetail";
import { Link } from "react-router-dom";
import ActivateModal from "./components/ActivateModal";
import BanModal from "./components/BanModal";
import CheckIcon from "components/Icons/CheckIcon";
export default function AccountDetail() {
  const {
    data: { loading, data },
    handleCloseActivate,
    handleCloseBan,
    handleOpenActivate,
    handleOpenBan,
    openActivate,
    openBan,
    fetchData,
  } = useAccountDetail();
  return (
    <div
      className="w-full bg-white rounded-lg p-6"
      style={{ boxShadow: "0 4px 25px 0 rgba(0,0,0,.1)" }}
    >
      {loading ? (
        <div className="w-full flex items-center justify-center py-20">
          <Spin />
        </div>
      ) : (
        <div className="w-full">
          <h4 className="text-lg font-medium">Account Information</h4>
          <div className="w-full mt-6 flex flex-wrap">
            <div className="flex flex-col">
              <table className="text-sm">
                <tbody>
                    <tr className="mt-4">
                      <td className="font-semibold min-w-36">Chat Id</td>
                      <td className="min-w-36">
                      {data?.chatId}
                    </td>
                  </tr>
                  <tr className="mt-4">
                    <td className="font-semibold min-w-36">Name</td>
                    <td className="min-w-36">
                      {data?.name}
                    </td>
                  </tr>
                  <tr className="mt-4">
                    <td className="font-semibold min-w-36">Gender</td>
                    <td className="min-w-36">{data?.gender}</td>
                  </tr>
                  <tr className="mt-4">
                    <td className="font-semibold min-w-36">Age</td>
                    <td className="min-w-36">{data?.age}</td>
                  </tr>
                  <tr className="mt-4">
                    <td className="font-semibold min-w-36">Country</td>
                    <td className="min-w-36">{data?.country}</td>
                  </tr>
                  <tr className="mt-4">
                    <td className="font-semibold min-w-36">City</td>
                    <td className="min-w-36">{data?.city}</td>
                  </tr>
                  <tr className="mt-4">
                    <td className="font-semibold min-w-36">Image</td>
                    <td className="min-w-36"> 
                                             <Image
                                                  width={50}
                                                  height={50}
                                                  src={data?.image}
                                                  alt="avatar"
                                                  style={{ cursor: 'pointer' }}
                                                  preview={{ visible: false }}
                                                  />
                     </td>
                  </tr>
                  <tr className="mt-4">
                    <td className="font-semibold min-w-36">Status</td>
                    <td className="min-w-36">
                      {statusBadge(data?.is_active ?? false)}
                    </td>
                  </tr>
                  <tr className="mt-4">
                      <td className="font-semibold min-w-36">UserRate</td>
                      <td className="min-w-36">
                      </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* <div className="w-full flex items-center justify-start gap-x-4">
            <Link to={RouteName.EDIT_ACCOUNT.replace(":id", data!.id)}>
              <Button
                className="h-auto w-fit flex items-center px-6 py-2 gap-x-1 hover:text-black"
                type="primary"
              >
                <span className="text-sm inline-block">
                  <EditIcon />
                </span>
                <span>Edit</span>
              </Button>
            </Link>*/}
            <div>
            {data?.is_active ? (
              <Button
                onClick={handleOpenBan}
                className="h-auto w-fit flex items-center px-6 py-2 gap-x-1"
                type="primary"
                danger
              >
                <span className="text-sm inline-block">
                  <BanIcon />
                </span>
                <span>Ban</span>
              </Button>
            ) : (
              <Button
                onClick={handleOpenActivate}
                className="h-auto w-fit flex items-center px-6 py-2 gap-x-1 bg-success shadow-success shadow-sm hover:shadow-black"
                type="primary"
              >
                <span className="text-sm inline-block">
                  <CheckIcon />
                </span>
                <span>Activate</span>
              </Button>
            )}
          </div> 
        </div>
      )}
       {data && (
        <>
          <ActivateModal
            account={data}
            handleClose={handleCloseActivate}
            open={openActivate}
            reload={fetchData}
          />
          <BanModal
            open={openBan}
            account={data}
            handleClose={handleCloseBan}
            reload={fetchData}
          />
        </>
      )} 
    </div>
  );
}
