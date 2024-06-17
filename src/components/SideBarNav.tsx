import { NavLink } from "react-router-dom";
import DiskIcon from "./Icons/DiskIcon";

export default function SideBarNav({ to, name }: { to: string; name: string }) {
  return (
    <div className="w-full px-4 relative overflow-visible mb-1">
      <NavLink
        to={to}
        className={({ isActive }) =>
          `${
            isActive ? "active" : ""
          } transition-all duration-300 py-10px pl-4 text-base w-full flex items-center justify-between hover:pl-6 text-[#000] font-semibold`
        }
      >
        <div className="w-full flex items-center gap-x-5">
          {/* <DiskIcon /> */}
          <p className="text-ellipsis text-nowrap overflow-hidden">{name}</p>
        </div>
      </NavLink>
    </div>
  );
}
