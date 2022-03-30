import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteCompany } from '../../app/reducers/companiesSlice';
import { Button } from 'react-bootstrap';

import icon from '../../image/delete.svg'

function DefectorCard({ company, index }) {
  const dispatch = useDispatch();
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{company.name}</td>
      <td><a href={company.website} target='_blank' rel='noreferrer'>{company.website}</a></td>
      <td>{company.date}</td>
      <td><Button variant="danger" onClick={() => dispatch(deleteCompany(company))}><img src={icon} alt="удаление компании"/></Button></td>
    </tr>
  );
}

export default DefectorCard;
