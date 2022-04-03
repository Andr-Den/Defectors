import React from 'react';
import { useForm } from 'react-hook-form';
import { connect, useDispatch } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { editCompany } from '../../app/reducers/companiesSlice';
import store from '../../app/store';

 function Edit({companies}) {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();

  const defaultValues = {
    name: companies.data.name,
    website: companies.data.website,
    date: companies.data.date,
  }

  const { register, handleSubmit } = useForm({
    defaultValues });

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
          <Form.Control {...register('name')}/>
          <Form.Label>Ссылка на новость</Form.Label>
          <Form.Control {...register('website')}/>
          <Form.Label>Дата</Form.Label>
          <Form.Control {...register('date')}/>
          <Button type="submit" variant="success" className="w-25 m-auto mt-3">Редактировать</Button>
          <Button variant="secondary" className="w-25 m-auto" onClick={handleClick}>Назад</Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `http://localhost:3001/${context.params.id}`
  );
  const companies = await res.json();

  return {
    props: {
      companies,
    },
  };
};

export default connect(store)(Edit);