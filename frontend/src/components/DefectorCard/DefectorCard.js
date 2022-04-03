import React from 'react';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';

import Icon from "../../images/delete.svg"
import Edit from "../../images/edit.svg"
import View from "../../images/view.svg"

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
    <tr className="c">
      <td className="">{index + 1}</td>
      <td className="">{company.name}</td>
      <td className=""><a href={company.website} target='_blank' rel='noreferrer'>{company.website}</a></td>
      <td className="">{company.date}</td>
      <td className="d-flex justify-content-between">
        <Button variant="dark" onClick={handleViewClick}><View /></Button>
        <Button variant="primary" onClick={handleClick}><Edit /></Button>
        <Button variant="danger" onClick={handleDeleteClick}><Icon /></Button>
      </td>
    </tr>
  </>
  );
}

export default DefectorCard;
