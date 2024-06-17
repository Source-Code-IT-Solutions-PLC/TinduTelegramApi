import { SortOrder } from "antd/es/table/interface";
import DownIcon from "./Icons/DownIcon";
import UpIcon from "./Icons/UpIcon";
import { Statistic } from "antd";

export const sortIcon = ({ sortOrder }: { sortOrder: SortOrder }) =>
  sortOrder === "ascend" ? (
    <UpIcon />
  ) : sortOrder === "descend" ? (
    <DownIcon />
  ) : (
    <></>
  );

export const statusBadge = (active: boolean) => (
  <div
    className={`${
      active ? "bg-success" : "bg-danger"
    } text-white text-[0.8rem] px-3 flex items-center justify-center w-fit h-[26px] font-normal rounded-3xl whitespace-nowrap`}
  >
    {active ? "Active" : "In Active"}
  </div>
);

export const verificationStatusBadge = (verified: boolean) => (
  <div
    className={`${
      verified ? "bg-success" : "bg-orange-400"
    } text-white text-[0.8rem] px-3 flex items-center justify-center w-fit h-[26px] font-normal rounded-3xl whitespace-nowrap`}
  >
    {verified ? "Verified" : "Pending"}
  </div>
);

export const balanceBadge = (balance: number) => {
  return (
    <div>
      <Statistic
        precision={2}
        value={balance}
        className="w-fit rounded-2xl p-0 overflow-clip"
        valueStyle={{
          fontSize: "0.8rem",
          padding: "2px 0.5rem",
          backgroundColor: balance > 0 ? "rgb(40,199,111)" : "rgb(234, 84, 85)",
          color: "rgba(255, 255, 255, 0.9)",
        }}
      />
    </div>
  );
};
