import React from 'react';
import { useForm } from 'react-hook-form';
import { connect, useDispatch } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { editCompany } from '../../app/reducers/companiesSlice';
import store from '../../app/store';

 function Edit() {
  const [name, setName] = React.useState('');
  const [website, setWebsite] = React.useState('');
  const [date, setDate] = React.useState('');
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const onSubmit = data => {
    dispatch(editCompany({...data, _id: id}))
    router.push('/');
  };

  const handleClick = (e) => {
    e.preventDefault()
    router.push('/')
  }

  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <Form onSubmit={handleSubmit(onSubmit)} className="w-50">
        <Form.Group className="d-grid gap-2">
          <Form.Label>Название компании</Form.Label>
          <Form.Control {...register('name')} value={name || ''} onChange={(e) => setName(e.target.value)}/>
          <Form.Label>Ссылка на новость</Form.Label>
          <Form.Control {...register('website')} value={website || ''} onChange={(e) => setWebsite(e.target.value)}/>
          <Form.Label>Дата</Form.Label>
          <Form.Control {...register('date')} value={date || ''} onChange={(e) => setDate(e.target.value)}/>
          <Button type="submit" variant="success" className="w-25 m-auto">Редактировать</Button>
          <Button variant="secondary" className="w-25 m-auto" onClick={handleClick}>Назад</Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default connect(store)(Edit);