import { Input, Table, TableColumnsType,Image,Card, Avatar, Typography,Button} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { DownloadOutlined, PrinterOutlined, SearchOutlined } from "@ant-design/icons";
import AddIcon from "components/Icons/AddIcon";
import useAccount from "hooks/accounts/useAccount";
import { IAccount } from "models/account";
import NextIcon from "components/Icons/NextIcon";
import PreviousIcon from "components/Icons/PreviousIcon";
import { sortIcon, statusBadge } from "components/Table";
import { AccountAlertContextProvider } from "./components/AccountAlertContext";
import Action from "./components/Action";
import { RouteName } from "constants/route";
import DownIcon from 'components/Icons/DownIcon';

const { Title } = Typography;

export default function Account() {
  const {
    data: { data, loading, page, per_page, search, total },
    handleSearch,
    handlePageChange,
  } = useAccount();

  const data1 = [
    {
      title: 'TOP KING',
      username: 'Habtish',
      avatar: '/habtish-avatar.png',
    },
    {
      title: 'TOP BOOSTER',
      username: 'Henok',
      avatar: '/henok-avatar.png',
    },
    {
      title: 'TOP GIFTER',
      username: 'Elieas',
      avatar: '/elieas-avatar.png',
    },
  ];
  return (
    <AccountAlertContextProvider>
      <div className="w-full relative">
      <div className="flex flex-wrap -mx-4">
      {data1.map((item, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <Card bordered={false} hoverable>
              <Avatar size={34} icon={<UserOutlined />} src={item.avatar} />
              <div className="font-sans">
                <h3 className="text-base font-semibold text-orange-500">{item.title}</h3>
                <p className="text-gray-500 font-normal">@{item.username}</p>
              </div>
          </Card>
        </div>
      ))}
      </div>
        <div className="w-full px-6 flex flex-wrap-reverse">
      <div className="font-normal text-2xl pr-5">
        <Title level={2}>All Users</Title>
      </div>
          <Input
            className="max-w-72 w-full h-auto px-4 py-2 text-base border border-[rgb(0,0,0,0.1)] rounded-3xl"
            prefix={<SearchOutlined className="mr-1" />}
            placeholder="Search..."
            onChange={handleSearch}
            value={search}
          />
          <div className="flex items-center ml-2"><span>Sort by </span><span><DownIcon></DownIcon></span></div>
          <div className="flex space-x-2 mt-4 ml-auto">
        <Button icon={<DownloadOutlined />}>Download list</Button>
        <Button icon={<PrinterOutlined />}>Print</Button>
      </div>
        </div>
        <div className="w-full mt-8 px-4">
          <Table
            loading={loading}
            columns={columns}
            // dataSource={[{
            //   created_at:new Date().toISOString(),
            //   updated_at:new Date().toISOString(),
            //   email: "admin@gmail.com",
            //   first_name:"Admin",
            //   id:"345435-345l345-345435-345l",
            //   image: "https://thumbs.wbm.im/pw/medium/68f7b67c79b9b350b0adde2b43411dcf.avif",
            //   is_active: true,
            //   is_verified: true,
            //   last_name: "Tester",
            //   phone:"+251912345678",
            //   registered_by: '',
            //   role:"Admin",
            // }]}
            dataSource={data}
            onChange={handlePageChange}
            pagination={{
              total,
              pageSize: per_page,
              current: page,
              nextIcon: (
                <span className="flex items-center justify-center w-8 h-8 text-2xl">
                  <NextIcon />
                </span>
              ),
              prevIcon: (
                <span className="flex items-center justify-center w-8 h-8 text-2xl">
                  <PreviousIcon />
                </span>
              ),
            }}
          />
        </div>
        
      </div>
    </AccountAlertContextProvider>
  );
}

const columns: TableColumnsType<IAccount> = [
  
  {
    title: "ChatId",
    dataIndex: "chatId",
    sortIcon,
    sorter: (a, b) => a.chatId-(b.chatId),
  },
  {
    title: "Name",
    dataIndex: "name",
    sortIcon,
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: "Gender",
    dataIndex: "gender",
    sortIcon,

    sorter: (a, b) => a.gender.localeCompare(b.gender),
  },
  {
    title: "Age",
    dataIndex: "age",
    sortIcon,

    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Image",
    dataIndex: "image",
      render: (value: string) =><Image 
                                    width={50}
                                    height={50}
                                    src={value} 
                                    alt="avatar"
                                    style={{ cursor: 'pointer' }}
                                    preview={{ visible: false }}/>,
  },
  {
    title: "Country",
    dataIndex: "country",
    sortIcon,
    sorter: (a, b) => a.country.localeCompare(b.country),
  },
  {
    title: "City",
    dataIndex: "city",
    sorter: (a, b) => a.city.localeCompare(b.city),
    sortIcon,
  },
  {
    title: "Status",
    dataIndex: "is_active",
    sortIcon,
    sorter: (a, b) => Number(a.is_active) - Number(b.is_active),
    render: statusBadge,
  },
  {
    title: "Action",
    render: (value: IAccount) => <Action account={value} />,
  },
];
