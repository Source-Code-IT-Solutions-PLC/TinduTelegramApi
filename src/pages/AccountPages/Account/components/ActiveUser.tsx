import { PieChart, Pie, Cell, Legend,ResponsiveContainer } from 'recharts';

interface UserData {
  name: string;
  isActiveUser: boolean;
  value: number;
  color: string;
}

function ActiveUser({}) {
  const userData: UserData[] = [
    { name: 'ActiveUser', isActiveUser: true, value: 40, color: '#4CAF50' },
    { name: 'InActiveUser', isActiveUser: false, value: 30, color: '#9edfea' },
  ];

const activeUserData = userData.filter((user) => user.isActiveUser);
const totalActiveUsers = activeUserData.reduce((total, user) => total + user.value, 0);
const inactiveUserData = userData.filter((user) => !user.isActiveUser);
const totalInactiveUsers = inactiveUserData.reduce((total, user) => total + user.value, 0);

const totalUsers = userData.reduce((total, user) => total + user.value, 0);

  const legendData = userData.map((user) => ({
    value: user.name,
    color: user.color,
  }));
  return (
    <div>
      <ResponsiveContainer width="100%" height={240}>
      <PieChart>
        <Pie
          data={userData}
          nameKey="name"
          dataKey="value"
          innerRadius={0}
          outerRadius={100}
          cx="40%"
          cy="50%"
          paddingAngle={0}
        >
           {userData.map((entry) => (
              <Cell fill={entry.color} stroke={entry.color} key={entry.name} />
            ))}
        </Pie>
        <Legend
          verticalAlign="middle"
          align="right"
          width={150}
          layout="vertical"
          iconSize={15}
          iconType="circle"
          payload={legendData}
        />
      </PieChart>
      </ResponsiveContainer>

      <p>Total Active Users: {totalActiveUsers}</p>
      <p>Total InActive Users: {totalInactiveUsers}</p>
      <p>Total Users: {totalUsers}</p>

    </div>
  );
}

export default ActiveUser;