import { Table } from 'antd';
import './App.css';
import CreateUserForm from './components/forms/CreateUserForm';
import { useEffect, useState } from 'react';
import { TUser } from './types';
import axios from 'axios';
import UserDetails from './components/modals/UserDetails';
import { format } from 'date-fns';

function App() {
  const [isLargeFont, setIsLargeFont] = useState<boolean>(false);
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
    <div className='flex flex-col items-center justify-start w-full h-screen gap-4 px-2 pt-6 sm:pt-10 sm:py-20 sm:px-4 md:px-8 md:gap-8 lg:flex-row bg-background'>
      <div className='px-4 flex flex-col gap-4 w-full lg:w-[75%] h-full'>
        <p className={`${isLargeFont ? 'text-4xl' : 'text-3xl'} font-semibold`}>
          Użytkownicy
        </p>
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
          rowClassName={`cursor-pointer ${isLargeFont ? 'text-lg' : ''}`}
          rootClassName={`${isLargeFont ? 'text-lg' : ''} p-0`}
          pagination={{
            pageSize: 5,
          }}
          locale={{
            emptyText: 'Brak danych',
          }}
        />
      </div>
      <div className='lg:w-[35%] sm:flex w-full hidden flex-col px-3 h-full'>
        <div className='flex flex-col items-center justify-start w-full gap-8 px-8 py-8 pt-12 bg-white border border-l shadow-md border-border rounded-xl'>
          <p
            className={`${isLargeFont ? 'text-2xl' : 'text-xl'} font-semibold`}
          >
            Stwórz Konto Użytkownika
          </p>

          <CreateUserForm
            isLargeFont={isLargeFont}
            setIsLargeFont={setIsLargeFont}
            setUsers={setUsers}
          />
        </div>
      </div>
      <UserDetails
        open={isOpenDetails}
        setOpen={setIsOpenDetails}
        id={selectedUserId!}
        setUsers={setUsers}
      />
    </div>
  );
}

export default App;
