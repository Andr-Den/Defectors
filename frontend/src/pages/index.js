import React from 'react';
import { useForm } from 'react-hook-form';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import store from '../app/store';
import { Button, Form, Table } from 'react-bootstrap';
import DefectorCard from '../components/DefectorCard/DefectorCard';
import Footer from '../components/Footer/Footer';
import { allCompanies, getCompanies, searchName } from '../app/reducers/companiesSlice';

import Search from '../images/search.svg'
import Return from '../images/return.svg'

function DefectorsList() {
  const dispatch = useDispatch();
  const companies = useSelector(allCompanies);
  const router = useRouter();
  const { register, handleSubmit, setValue } = useForm();
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
    setValue('search', '')
    dispatch(getCompanies())
  }

  return (
    <div>
      <div>
        <h1>Список компаний, ушедших из России</h1>
        <div className="d-flex justify-content-center mt-5">
          <Form onSubmit={handleSubmit(onSubmit)} className="w-50">
            <Form.Group className="d-flex gap-3">
              <Form.Control {...register('search')}/>
              <Button type="submit" variant="success"><Search /></Button>
              <Button variant="secondary" onClick={handleReturnClick}><Return /></Button>
            </Form.Group>
          </Form>
        </div>
      </div>
      {companies.length !== 0 ? 
        <Table striped bordered hover className="w-75 m-auto mt-5">
          <thead>
            <tr>
              <th className="col-1">#</th>
              <th className="col-1">Имя</th>
              <th className="col-7">Ссылка на новость</th>
              <th className="col-1">Дата</th>
              <th className="col-2"><Button variant="success" onClick={handleClick} className="m-auto w-100">Добавить</Button></th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company, index) => (
              <DefectorCard company={company} key={company._id} index={index}/>
            ))}
          </tbody>
        </Table> : <h2 className="text-center mt-5">Ничего не найдено :(</h2>}
        <Footer />
    </div>
  );
}

export default connect(store)(DefectorsList);
