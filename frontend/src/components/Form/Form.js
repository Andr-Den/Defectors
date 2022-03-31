import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import { addCompany } from '../../app/reducers/companiesSlice';

 function AddForm() {
  const [name, setName] = React.useState('');
  const [website, setWebsite] = React.useState('');
  const [date, setDate] = React.useState('');
  const { register, handleSubmit } = useForm();
  const onSubmit = data => dispatch(addCompany(data));
  const dispatch = useDispatch();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3">
        <Form.Label>Название компании</Form.Label>
        <Form.Control placeholder="Введите название" {...register('name')} value={name || ''} onChange={(e) => setName(e.target.value)}/>
        <Form.Label>Ссылка на новость</Form.Label>
        <Form.Control placeholder="Введите ссылку" {...register('website')} value={website || ''} onChange={(e) => setWebsite(e.target.value)}/>
        <Form.Label>Дата</Form.Label>
        <Form.Control placeholder="Введите дату" {...register('date')} value={date || ''} onChange={(e) => setDate(e.target.value)}/>
        <Button type="submit" className="mt-3">Добавить</Button>
      </Form.Group>
    </Form>
  );
}

export default AddForm;
