import { Table } from 'antd';
import './App.css';
import CreateUserForm from './components/forms/CreateUserForm';
import { useEffect, useState } from 'react';
import { TUser } from './types';
import axios from 'axios';
import UserDetails from './components/modals/UserDetails';
import { format } from 'date-fns';

function App() {
  const [users, setUsers] = useState<TUser[]>([]);
  const [isOpenDetails, setIsOpenDetails] = useState<boolean>(false);
  const [selectedUserId, setSelectedUserId] = useState<number>();
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Imię',
      dataIndex: 'first_name',
      key: 'first_name',
    },
    {
      title: 'Nazwisko',
      dataIndex: 'last_name',
      key: 'last_name',
    },
    {
      title: 'Kontynent',
      dataIndex: 'continent',
      key: 'continent',
    },
    {
      title: 'Data Urodzenia',
      dataIndex: 'date_of_birth',
      key: 'date_of_birth',
    },
  ];

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios('http://localhost:8080/api/form', {
        method: 'GET',
      });

      setUsers(res.data.users);
    };
    fetchUsers();
  }, []);
  return (
    <div className='flex items-center justify-start w-full h-screen gap-8 bg-background'>
      <div className='px-8 py-20 flex flex-col gap-4 w-[75%] h-full'>
        <p className='text-3xl font-semibold '>Użytkownicy</p>
        <div className='w-full'></div>
        <Table
          columns={columns}
          dataSource={users?.map((u, index) => {
            return {
              key: index,
              first_name: u.first_name,
              last_name: u.last_name,
              continent: u.continent,
              date_of_birth: format(u.date_of_birth, 'dd.MM.yyyy'),
              id: u.id,
            };
          })}
          onRow={(record, rowIndex) => {
            return {
              onClick: () => {
                setSelectedUserId(record.id);
                setIsOpenDetails(true);
              },
            };
          }}
          className='border rounded-lg shadow-md border-border'
        />
      </div>
      <div className='w-[35%] flex flex-col py-20  h-full px-8'>
        <div className='flex flex-col items-center justify-start w-full gap-8 px-8 py-8 pt-12 bg-white border border-l shadow-md border-border rounded-xl'>
          <p className='text-xl font-semibold'>Stwórz Konto Użytkownika</p>

          <CreateUserForm />
        </div>
      </div>
      <UserDetails
        open={isOpenDetails}
        setOpen={setIsOpenDetails}
        id={selectedUserId!}
      />
    </div>
  );
}

export default App;
