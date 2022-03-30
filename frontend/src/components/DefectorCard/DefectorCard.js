import React from 'react'

function DefectorCard({name, website, date}) {
return (
  <li className="movie-card">
        <p className="">{`Название компании: ${name}`}</p>
        <p className="">{`Ссылка на новость: ${website}`}</p>
        <p className="">{`Дата: ${date}`}</p>
  </li>
)}

export default DefectorCard;