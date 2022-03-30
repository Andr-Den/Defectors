import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteCompany } from '../../app/reducers/companiesSlice';

function DefectorCard({company}) {
  const dispatch = useDispatch();
  return (
    <li className="movie-card">
        <p className="">{`Название компании: ${company.name}`}</p>
        <p className="">{`Ссылка на новость: ${company.website}`}</p>
        <p className="">{`Дата: ${company.date}`}</p>
        <button onClick={() => dispatch(deleteCompany(company))}>Удалить</button>
    </li>
  );
}

export default DefectorCard;
