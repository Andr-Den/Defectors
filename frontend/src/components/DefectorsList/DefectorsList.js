import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Table } from 'react-bootstrap';
import DefectorCard from '../DefectorCard/DefectorCard';
import { allCompanies, getCompanies } from '../../app/reducers/companiesSlice';

function DefectorsList() {
  const dispatch = useDispatch();
  const companies = useSelector(allCompanies);

  return (
    <>
      <Button onClick={() => dispatch(getCompanies())} className="mt-3">
        Список компаний
      </Button>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Имя</th>
            <th>Ссылка на новость</th>
            <th>Дата</th>
            <th></th>
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

export default DefectorsList;
