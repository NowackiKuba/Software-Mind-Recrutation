import { Modal, notification } from 'antd';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { TUser } from '../../types';
import Button from '../Button';
import { LuLoader2, LuTrash } from 'react-icons/lu';
import axios from 'axios';

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  id: number;
  setUsers: Dispatch<SetStateAction<TUser[]>>;
}

const UserDetails = ({ open, setOpen, id, setUsers }: Props) => {
  const [user, setUser] = useState<TUser | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios(`http://localhost:8080/api/form/${id}`, {
        method: 'GET',
      });
      setUser(res.data.user);
    };
    fetchUser();
  }, [id]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleDeleteUser = async () => {
    try {
      setIsLoading(true);
      await axios(`http://localhost:8080/api/form/${id}`, {
        method: 'DELETE',
      });

      notification.success({
        message: 'Sukces',
        description: 'Użytkownik został usunięty',
        duration: 2,
      });
      setOpen(false);
      setUsers((prev) => prev.filter((user) => user.id !== id));
    } catch (error) {
      notification.error({
        message: 'Coś poszło nie tak!',
        description:
          'Nie udało się usunąć użytkownika. Spróbuj ponownie później.',
        duration: 2,
      });
      return;
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onCancel={() => setOpen(false)}
      footer={[
        <div className='flex justify-start w-full mt-6'>
          <Button
            className='bg-red-500 hover:bg-red-600 disabled:bg-red-300'
            disabled={isLoading}
            onClick={async () => await handleDeleteUser()}
          >
            {isLoading ? (
              <div className='flex items-center gap-1'>
                <LuLoader2 className='w-4 h-4 animate-spin' />
                <p>Usuń Konto</p>
              </div>
            ) : (
              <div className='flex items-center gap-1'>
                <LuTrash className='w-4 h-4 ' />
                <p>Usuń Konto</p>
              </div>
            )}
          </Button>
        </div>,
      ]}
    >
      <div className='flex flex-col w-full gap-4'>
        <div className='flex items-center w-full gap-3'>
          <div className='flex items-center justify-center w-20 h-20 text-2xl font-bold text-blue-500 rounded-xl bg-blue-500/10 '>
            {user?.first_name[0]}
            {user?.last_name[0]}
          </div>
          <div className='flex flex-col'>
            <p className='text-2xl font-bold'>
              {user?.first_name} {user?.last_name}
            </p>
            <p className='font-semibold first-letter:uppercase'>
              {user?.continent}
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default UserDetails;
