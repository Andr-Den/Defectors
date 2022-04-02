import React from 'react';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';

function DefectorCard({ company, index }) {
  const router = useRouter();

  const handleViewClick = (e) => {
    e.preventDefault()
    router.push(`/view/${company._id}`)
  }
  const handleClick = (e) => {
    e.preventDefault()
    router.push(`/edit/${company._id}`)
  }
  
  const handleDeleteClick = (e) => {
    e.preventDefault()
    router.push(`/remove/${company._id}`)
  }

  return (
    <>
    <tr>
      <td>{index + 1}</td>
      <td>{company.name}</td>
      <td><a href={company.website} target='_blank' rel='noreferrer'>{company.website}</a></td>
      <td>{company.date}</td>
      <td className="d-flex justify-content-between">
        <Button variant="danger" onClick={handleViewClick}>Просмотр</Button>
        <Button variant="primary" onClick={handleClick}>Редактировать</Button>
        <Button variant="danger" onClick={handleDeleteClick}>Удалить</Button>
      </td>
    </tr>
  </>
  );
}

export default DefectorCard;
