import React from 'react';
import { useForm } from 'react-hook-form';
import { connect, useDispatch } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { addCompany } from '../app/reducers/companiesSlice';
import store from '../app/store';

function Add() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const onSubmit = data => { 
    dispatch(addCompany(data));
    router.push('/');
  }
  const router = useRouter();

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
          <Button type="submit" variant="success" className="mt-3 w-25 m-auto">Добавить</Button>
          <Button variant="secondary" className="w-25 m-auto" onClick={handleClick}>Назад</Button>
        </Form.Group>
      </Form>
    </div>
    );
  }

export default connect(store)(Add);
