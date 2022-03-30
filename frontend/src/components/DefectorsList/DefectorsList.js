import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DefectorCard from '../DefectorCard/DefectorCard';
import { allCompanies, getCompanies } from '../../app/reducers/companiesSlice';

function DefectorsList() {
  const dispatch = useDispatch();
  const companies = useSelector(allCompanies);

  return (
    <>
      <button onClick={() => dispatch(getCompanies())}>
        Список компаний
      </button>
      <ul className="">
        {companies.map(({ name, website, date }, index) => (
          <DefectorCard name={name} website={website} date={date} key={index}/>
        ))}
      </ul>
    </>
  );
}

export default DefectorsList;
