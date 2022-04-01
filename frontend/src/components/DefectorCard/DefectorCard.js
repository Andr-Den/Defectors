import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { deleteCompany } from '../../app/reducers/companiesSlice';

function DefectorCard({ company, index }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault()
    router.push(`/edit/${company._id}`)
  }

  return (
    <>
    <tr>
      <td>{index + 1}</td>
      <td>{company.name}</td>
      <td><a href={company.website} target='_blank' rel='noreferrer'>{company.website}</a></td>
      <td>{company.date}</td>
      <td className="d-flex justify-content-between">
        <Button variant="primary" onClick={handleClick}>Редактировать</Button>
        <Button variant="danger" onClick={() => dispatch(deleteCompany(company))}>Удалить</Button>
      </td>
    </tr>
  </>
  );
}

export default DefectorCard;
