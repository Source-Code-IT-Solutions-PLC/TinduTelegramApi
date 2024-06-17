import BanIcon from "components/Icons/BanIcon";
import CheckIcon from "components/Icons/CheckIcon";
import EditIcon from "components/Icons/EditIcon";
import ViewIcon from "components/Icons/ViewIcon";
import { useAccountAlertContext } from "./AccountAlertContext";
import { IAccount } from "models/account";
import { Link } from "react-router-dom";
import { RouteName } from "constants/route";

interface IProps {
  account: IAccount;
}

export default function Action({ account }: IProps) {
  const { showActivate, showBan } = useAccountAlertContext();

  const handleClick = () => {
    if (account.is_active) showBan(account);
    else showActivate(account);
  };

  return (
    <div className="flex items-center gap-x-3">
      <Link state={account}
        to={RouteName.ACCOUNT_DETAIL.replace(":id", account._id)}
        className="rounded-ful hover:text-black"
      >
        <ViewIcon />
      </Link>
      {/* <Link
        to={RouteName.EDIT_ACCOUNT.replace(":id", account._id)}
        className="rounded-ful hover:text-black"
      > 
        <EditIcon />
        </Link>*/}
      
      <button onClick={handleClick} className="rounded-ful">
        {account.is_active ? <CheckIcon /> : <BanIcon />}
      </button>
    </div>
  );
}
