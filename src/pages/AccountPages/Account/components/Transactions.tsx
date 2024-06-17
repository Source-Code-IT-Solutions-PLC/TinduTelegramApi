import React, { useState, useEffect } from 'react';
import { Table, Typography, Button, Dropdown, Menu,Card,Avatar  } from 'antd';
import { ClockCircleOutlined, DollarCircleOutlined, DownOutlined , BankOutlined,UserOutlined  } from '@ant-design/icons';

const { Title, Text } = Typography;

type Transaction = {
  key: string;
  date: string;
  transactionId: string;
  receiver: string;
  type: string;
};

const Transaction: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [totalBalance, setTotalBalance] = useState<number>(0);
  const [availableBalance, setAvailableBalance] = useState<number>(0);

  useEffect(() => {
    fetchTransactionData();
    calculateBalances();
  }, []);

  const fetchTransactionData = () => {
    setTransactions([
      {
        key: '1',
        date: '2023-06-16',
        transactionId: '0204181810319',
        receiver: 'Tóth Kamilla',
        type: 'Cash In',
      },
    ]);
  };
  const item = {
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
  };
  

  const calculateBalances = () => {
    setTotalBalance(87890.90);
    setAvailableBalance(78898.98);
  };


  const transactionColumns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (text: string) => <Text>{text}</Text>,
    },
    {
      title: 'Transaction ID',
      dataIndex: 'transactionId',
      key: 'transactionId',
      render: (text: string) => <Text>{text}</Text>,
    },
    {
      title: 'Receiver',
      dataIndex: 'receiver',
      key: 'receiver',
      render: (text: string) => <Text>{text}</Text>,
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      render: (text: string) => <Text>{text}</Text>,
    },
  ];

  return (
    <>
      
      <div className="w-full">
        <div className="flex justify-between items-center mb-2">
          <Card className='flex h-32 w-96 rounded-lg'> 
            <Avatar size={34} icon={<UserOutlined />} src={item.avatar} />
            <Title level={5} className='flex'>TOP KING</Title> 
            <p className="text-gray-500 font-normal">Choose From Above Listed Services</p>
          </Card>
              <Card className="flex items-center flex h-32 w-72 rounded-lg">
              <DollarCircleOutlined />
              <Text>Total Float Balance </Text>
              <span className="text-orange-500 w-5 h-4 text-xs font-normal font-sans pt-2 items-end">ETH</span>
               <br/>
              {totalBalance}
              </Card>
              <Card className='flex h-32 w-72 rounded-lg'>
              <BankOutlined />
              <Text>Available Cash Balance: {availableBalance}</Text>
              </Card>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="col-span-1 bg-white rounded-lg shadow p-4">
            <div className="flex items-center space-x-2 mb-4">
              <ClockCircleOutlined />
              <Title level={4}>Transaction history</Title>
            </div>
            <Table columns={transactionColumns} dataSource={transactions} pagination={false} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Transaction;