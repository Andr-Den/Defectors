import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteCompany } from '../../app/reducers/companiesSlice';
import { Button } from 'react-bootstrap';
import EditPage from '../EditPage/EditPage';

import icon from '../../image/delete.svg'
import edit from '../../image/edit.svg'

function DefectorCard({ company, index }) {
  const [editPageOpen, setEditPageOpen] = React.useState(false);
  const dispatch = useDispatch();
  return (
    <>
    { editPageOpen ? <EditPage setEditPageOpen={setEditPageOpen} company={company}/> : '' }
    <tr>
      <td>{index + 1}</td>
      <td>{company.name}</td>
      <td><a href={company.website} target='_blank' rel='noreferrer'>{company.website}</a></td>
      <td>{company.date}</td>
      <td>
        <Button variant="primary" onClick={() => dispatch(setEditPageOpen(true))}><img src={edit} alt="редактирование компании"/></Button>
        <Button variant="danger" onClick={() => dispatch(deleteCompany(company))}><img src={icon} alt="удаление компании"/></Button>
      </td>
    </tr>
  </>
  );
}

export default DefectorCard;
