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
        {companies.map((company) => (
          <DefectorCard company={company} key={company._id}/>
        ))}
      </ul>
    </>
  );
}

export default DefectorsList;
