import React from 'react';
import { Layout, Menu,Image } from 'antd';
import logo from '../assets/images/logo.jpg';
import {
  DashboardOutlined,
  TransactionOutlined,
  UserOutlined,
  DollarOutlined,
  LineChartOutlined,
  AreaChartOutlined,
  BarChartOutlined,
  FileTextOutlined
} from '@ant-design/icons';
import MenuIcon from "./Icons/MenuIcon";
import SideBarNav from "./SideBarNav";
import { RouteName } from "constants/route";

const { Sider } = Layout;

const SideBar: React.FC = () => {
  return (

    <aside
      className="fixed z-50 min-h-screen top-0 left-0 bg-white w-full max-w-260 flex flex-col"
      style={{ boxShadow: "0 0 15px 0 rgba(0,0,0,.05)" }}
    >
    <Sider collapsible style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column', gap: '2.4rem' }}>
        <div className="w-full flex items-center py-5 px-4 justify-between">
        <span className="text-orange-400 font-bold text-2xl pl-1"><Image src={logo} alt="Logo" className="w-52 h-52" /></span>
        <button >
          <MenuIcon />
        </button>
      </div>
      <Menu theme="light" defaultSelectedKeys={['1']} mode="inline"  style={{ background: 'none' }}>
        <Menu.Item key="1" icon={<DashboardOutlined />} className="text-white">
          <SideBarNav to={RouteName.Statistics} name="Dashboard" />
        </Menu.Item>
        <Menu.Item key="2" icon={<TransactionOutlined />}>
          <SideBarNav to={RouteName.Transactions} name="Transactions" />
        </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />}>
          <SideBarNav to={RouteName.ACCOUNT} name="Users" />
        </Menu.Item>
        <Menu.Item key="4" icon={<DollarOutlined />}>
          <SideBarNav to={RouteName.Coins} name="Coins" />
        </Menu.Item>
        <Menu.Item key="5" icon={<LineChartOutlined />}>
          <SideBarNav to={RouteName.Referral} name="Referral" />
        </Menu.Item>
        <Menu.Item key="6" icon={<AreaChartOutlined />}>
          <SideBarNav to={RouteName.Boost} name="Boost" />
        </Menu.Item>
        <Menu.Item key="7" icon={<BarChartOutlined />}>
          <SideBarNav to={RouteName.Matches} name="Matches" />
        </Menu.Item>
        <Menu.Item key="8" icon={<FileTextOutlined />}>
          <SideBarNav to={RouteName.Reports} name="Reports" />
        </Menu.Item>
      </Menu>
    </Sider>
    </aside>
  );
};

export default SideBar;