import { Link } from "react-router-dom";
import HomeIcon from "./Icons/HomeIcon";
import ForwardIcon from "./Icons/ForwardIcon";

export default function Header() {
  return (
    <header className="w-full mb-6 flex items-center">
      <h1 className="text-[#636363] text-2xl font-medium pr-4 border-r border-r-divider inline-block">
        Users
      </h1>
      <div className="pl-4 flex items-center flex-wrap">
        <div className="flex items-center">
          <Link className="text-black" to="/">
            <HomeIcon />
          </Link>
          <span className="px-2">
            <ForwardIcon />
          </span>
          <span className="inline-block text-sm font-normal">Users</span>
        </div>
      </div>
    </header>
  );
}
