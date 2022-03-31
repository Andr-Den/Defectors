import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import { editCompany } from '../../app/reducers/companiesSlice';

 function EditForm({company}) {
  const [name, setName] = React.useState('');
  const [website, setWebsite] = React.useState('');
  const [date, setDate] = React.useState('');
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const onSubmit = data => dispatch(editCompany({...data, _id: company._id}));

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3">
        <Form.Label>Название компании</Form.Label>
        <Form.Control placeholder="Введите название" {...register('name')} value={name || company.name} onChange={(e) => setName(e.target.value)}/>
        <Form.Label>Ссылка на новость</Form.Label>
        <Form.Control placeholder="Введите ссылку" {...register('website')} value={website || company.website} onChange={(e) => setWebsite(e.target.value)}/>
        <Form.Label>Дата</Form.Label>
        <Form.Control placeholder="Введите дату" {...register('date')} value={date || company.date} onChange={(e) => setDate(e.target.value)}/>
        <Button type="submit" className="mt-3">Редактировать</Button>
      </Form.Group>
    </Form>
  );
}

export default EditForm;