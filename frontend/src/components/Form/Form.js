import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addCompany } from '../../app/reducers/companiesSlice';

export default function Form() {
  const [name, setName] = React.useState('');
  const [website, setWebsite] = React.useState('');
  const [date, setDate] = React.useState('');
  const { register, handleSubmit } = useForm();
  const onSubmit = data => dispatch(addCompany(data));
  const dispatch = useDispatch();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} placeholder="Имя" value={name || ''} onChange={(e) => setName(e.target.value)}/>
      <input {...register('website')} placeholder="Ссылка" value={website || ''} onChange={(e) => setWebsite(e.target.value)}/>
      <input {...register('date')} placeholder="Дата" value={date || ''} onChange={(e) => setDate(e.target.value)}/>
      <input type="submit" value="Добавить"/>
    </form>
  );
}
