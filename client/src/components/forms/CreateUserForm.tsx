import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import schema from '../../lib/validations/user.validation';
import { z } from 'zod';
import { DatePicker } from 'antd';
import Input from '../Input';
import Label from '../Label';
import Button from '../Button';
import { notification } from 'antd';
import { LuLoader2 } from 'react-icons/lu';
import axios from 'axios';
import Select from '../Select';
import SelectItem from '../SelectItem';

const CreateUserForm = () => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const [continents, setContinets] = useState<string[]>([]);

  useEffect(() => {
    const fetchContinents = async () => {
      const response = await fetch('http://localhost:8080/api/continents/');
      const data = await response.json();
      setContinets(data.continents);
    };

    fetchContinents();
  }, []);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const onSubmit = async (values: z.infer<typeof schema>) => {
    try {
      setIsLoading(true);
      const res = await axios('http://localhost:8080/api/form', {
        method: 'POST',
        data: {
          first_name: values.first_name,
          last_name: values?.last_name,
          date_of_birth: values.date_of_birth,
          continent: values.continent,
        },
      });
      notification.success({
        message: 'Sukces',
        description: 'Użytkownik został utworzony',
        duration: 2,
      });
    } catch (error) {
      alert('Wystąpił błąd');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form
      className='flex flex-col w-full gap-6'
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <div className='flex flex-col gap-0.5 w-full'>
        <Label>Kontynent</Label>
        <Select
          {...form.register('date_of_birth')}
          options={continents.map((continent) => {
            return { value: continent, label: continent };
          })}
        />
        {form.formState.errors.continent && (
          <p className='text-red-500'>
            {form.formState.errors.continent.message}
          </p>
        )}
      </div>
      <div className='flex flex-col gap-0.5 w-full'>
        <Label>Imię</Label>
        <Input {...form.register('first_name')} />
        {form.formState.errors.first_name && (
          <p className='text-red-500'>
            {form.formState.errors.first_name.message}
          </p>
        )}
      </div>
      <div className='flex flex-col gap-0.5 w-full'>
        <Label>Nazwisko</Label>
        <Input {...form.register('last_name')} />
        {form.formState.errors.date_of_birth && (
          <p className='text-red-500'>
            {form.formState.errors.date_of_birth?.message}
          </p>
        )}
      </div>
      <div className='flex flex-col gap-0.5 w-full'>
        <Label>Data Urodzenia</Label>
        <DatePicker
          onChange={(e) => form.setValue('date_of_birth', e.toDate())}
        />
      </div>
      <Button
        onClick={() => {
          console.log(form.getValues());
        }}
        disabled={
          isLoading ||
          !form.formState.isValid ||
          (form.getValues().date_of_birth &&
            form.getValues().date_of_birth! > new Date())
        }
        type='submit'
      >
        {isLoading ? (
          <div className='flex items-center justify-center gap-1'>
            <LuLoader2 className='w-4 h-4 animate-spin' />
            <p>Stwórz</p>
          </div>
        ) : (
          'Stwórz'
        )}
      </Button>
    </form>
  );
};

export default CreateUserForm;
