import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import store from '../app/store';
import { Button, Table } from 'react-bootstrap';
import DefectorCard from '../components/DefectorCard/DefectorCard';
import { allCompanies, getCompanies } from '../app/reducers/companiesSlice';

function DefectorsList() {
  const dispatch = useDispatch();
  const companies = useSelector(allCompanies);
  const router = useRouter();

  React.useEffect(() => {
    dispatch(getCompanies())
  }, [dispatch])

  const handleClick = (e) => {
    e.preventDefault()
    router.push('/add')
  }

  return (
    <>
    <h1 className="">Список компаний, ушедших из России</h1>
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
      </Table>
    </>
  );
}

export default connect(store)(DefectorsList);
