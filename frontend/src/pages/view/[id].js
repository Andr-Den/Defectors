import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import store from '../../app/store';

 function View({company}) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault()
    router.push('/')
  }

  return (
    <div className="d-flex flex-column mt-5 align-items-center">
      <span>Название: </span>
      <h1>{company.data.name}</h1>
      <span>Ссылка на новость: </span>
      <a href={company.data.website} target='_blank' rel='noreferrer'><h2>{company.data.website}</h2></a>
      <span>Дата: </span>
      <h3>{company.data.date}</h3>
      <Button variant="secondary" className="w-25 m-auto mt-3" onClick={handleClick}>Назад</Button>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `http://localhost:3001/${context.params.id}`
  );
  const company = await res.json();

  return {
    props: {
      company,
    },
  };
};

export default connect(store)(View);
