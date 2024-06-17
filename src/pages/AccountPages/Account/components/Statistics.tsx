import React,{useEffect,useState} from 'react'
import { Card, Spin, Alert,Dropdown,Menu, Typography } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,BarChart, Bar, Rectangle } from 'recharts';
import { UserStats } from 'models/account';
import DownIcon from 'components/Icons/DownIcon';

function Statistics() {
    const [stat, setStats] = useState<UserStats[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const data = [
      { name: 'Dec 10', Male: 10, Female: 5, Coins: 8, Flowers: 7 },
      { name: 'Dec 10', Male: 20, Female: 15, Coins: 18, Flowers: 17 },
      { name: 'Dec 10', Male: 3260, Female: 2535, Coins: 3268, Flowers: 3267 },
      { name: 'Dec 10', Male: 880, Female: 5400, Coins: 1160,Flowers:2214 },
      { name: 'Dec 10', Male: 750, Female: 4900, Coins: 580,Flowers:2147 },
      { name: 'Dec 10', Male: 700, Female: 5100, Coins: 610,Flowers:3698 },
      { name: 'Dec 10', Male: 600, Female: 5200, Coins: 600 ,Flowers:2475},
      { name: 'Dec 10', Male: 580, Female: 4600, Coins: 480 ,Flowers:789},
      { name: 'Dec 10', Male: 550, Female: 4500, Coins: 440,Flowers:7845 },
      { name: 'Dec 10', Male: 500, Female: 4300, Coins: 350,Flowers:1234 },
      ];
    const dataBar = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

    const stats = [
      {
        title: 'Total Transaction',
        value: '886,890.90',
        currency: 'ETH',
        frequency: 'Daily',
        percentage: '+13%',
        percentageClass: 'text-green-500',
      },
      {
        title: 'Total Customers',
        value: '886,387',
        frequency: 'Daily',
        percentage: '-18%',
        percentageClass: 'text-red-500',
        extra: 'Active Users',
      },
      {
        title: 'Total Revenue',
        value: '2,886,387.00',
        currency: 'ETH',
        frequency: 'Daily',
        percentage: '+13%',
        percentageClass: 'text-green-500',
      },
      {
        title: 'Tax',
        value: '1,387.00',
        currency: 'ETH',
        frequency: 'Daily',
        percentage: '+13%',
        percentageClass: 'text-green-500',
      },
    ];  
    // useEffect(() => {
    //   const fetchUserStats = async () => {
    //     try {
    //      // const response = await axios.get<UserStats>('/api/user-stats');
    //      // setStats(response.data);
    //     } catch (error) {
    //       setError('Failed to fetch user statistics');
    //     } finally {
    //       setLoading(false);
    //     }
    //   };
  
    //   fetchUserStats();
    // }, []);
  
    // if (loading) {
    //   return <Spin size="large" />;
    // }
  
    // if (error) {
    //   return <Alert message="Error" description={error} type="error" showIcon />;
    // }
    
    
  return (
    <div className="flex flex-wrap gap-4 p-2">
        {stats.map((stat: typeof stats[number], index: number) => (
          <Card
            key={index}
            bordered={false}
            className="flex-1 w-237 h-128 top-98"
            style={{ maxWidth: 300 }}
            title={
              <div className="flex justify-between items-center ">
                <span className='text-base font-normal gap-1 pr-2'>{stat.title}</span>
                {stat.currency && <span className="text-orange-500  text-xs font-normal font-sans">{stat.currency}</span>}
  {stat.extra && 
  <span className="text-orange-500 text-xs font-normal  flex items-center">
    {stat.extra}   <Dropdown  
                  // icon={<DownIcon/>}   
                overlay={
                  <Menu>
                    <Menu.Item key="1">Active</Menu.Item>
                    <Menu.Item key="2">InActive</Menu.Item>
                  </Menu>
                }
                placement="bottomLeft"
              >
                <span className="text-xs ml-2 flex"><DownIcon /></span>
        </Dropdown>
  </span>
}
              </div>
            }
          >
            <p className="text-3xl font-semibold text-2xl pt-1 pb-2">{stat.value}</p>
            <div className="flex justify-between items-center">
              <Dropdown  
                  // icon={<DownIcon/>}   
                overlay={
                  <Menu>
                    <Menu.Item key="1">Daily</Menu.Item>
                    <Menu.Item key="2">Weekly</Menu.Item>
                    <Menu.Item key="3">Monthly</Menu.Item>
                  </Menu>
                }
                placement="bottomLeft"
              >
                <span className="cursor-pointer font-normal text-xs flex items-center w-4 h-4">{stat.frequency}<span className="ml-2 text-xs  flex items-center"><DownIcon /></span></span>
              </Dropdown>
              <span className={stat.percentageClass}>{stat.percentage}</span>
            </div>
          </Card>
        ))}
      <div className="p-6 bg-white ">
      <div className="flex justify-items-center mb-4">
        <h2 className="text-lg font-semibold">Performance Overview (Based on no. of transactions completed)</h2>
        <span>This Month</span><DownIcon/>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" height={36} align="left"/>
          <Line type="monotone" dataKey="Male" stroke="#ff7300" />
          <Line type="monotone" dataKey="Female" stroke="#387908" />
          <Line type="monotone" dataKey="Coins" stroke="#8884d8"  />
          <Line type="monotone" dataKey="Flowers" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      </div>
    <div className="p-6 bg-white ">
    <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Transaction History OverView</h2>
        <span>This Month</span><span className="flex items-center"><DownIcon /></span>
      </div>
    <ResponsiveContainer width={400} height={300} >
        <BarChart
          data={dataBar}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" height={36}/>
          <Bar dataKey="pv" fill="gray" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
    </div>
    </div>
  )
}

export default Statistics