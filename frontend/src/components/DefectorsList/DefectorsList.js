import React from 'react'
import DefectorCard from '../DefectorCard/DefectorCard';

function DefectorsList({companies}) {

  return (
    <>
        <ul className="">
          {companies.map(({name, website, date}, index) => (
            <DefectorCard name={name} website={website} date={date} key={index}/>
          ))}
        </ul>
      </>
)}

export default DefectorsList;