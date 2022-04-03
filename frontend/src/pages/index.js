import React from 'react';
import { useForm } from 'react-hook-form';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import store from '../app/store';
import { Button, Form, Table } from 'react-bootstrap';
import DefectorCard from '../components/DefectorCard/DefectorCard';
import { allCompanies, getCompanies, searchName } from '../app/reducers/companiesSlice';

function DefectorsList() {
  const dispatch = useDispatch();
  const companies = useSelector(allCompanies);
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    dispatch(searchName(data));
  }
  
  React.useEffect(() => {
    dispatch(getCompanies())
  }, [dispatch])

  const handleClick = (e) => {
    e.preventDefault()
    router.push('/add')
  }

  const handleReturnClick = (e) => {
    e.preventDefault()
    dispatch(getCompanies())
  }

  return (
    <div className="page">
      <div className="">
        <h1 className="">Список компаний, ушедших из России</h1>
        <div className="d-flex justify-content-center align-items-center mt-5">
          <Form onSubmit={handleSubmit(onSubmit)} className="w-50">
            <Form.Group className="d-grid gap-2">
              <Form.Label>Поиск</Form.Label>
              <Form.Control {...register('search')}/>
              <Button type="submit" variant="success" className="mt-3 w-25 m-auto">Поиск</Button>
              <Button variant="secondary" className="w-25 m-auto" onClick={handleReturnClick}>Назад</Button>
            </Form.Group>
          </Form>
        </div>
      </div>
      {companies.length !== 0 ? 
        <Table striped bordered hover className="mt-3">
          <thead>
            <tr>
              <th>#</th>
              <th>Имя</th>
              <th>Ссылка на новость</th>
              <th>Дата</th>
              <th><Button variant="success" onClick={handleClick} className="m-auto w-100">Добавить</Button></th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company, index) => (
              <DefectorCard company={company} key={company._id} index={index}/>
            ))}
          </tbody>
        </Table> : <p>Ничего не найдено</p>}
    </div>
  );
}

export default connect(store)(DefectorsList);
