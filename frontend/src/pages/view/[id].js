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
    <div className="d-flex flex-column mt-5">
      <h1>{company.data.name}</h1>
      <p>{company.data.website}</p>
      <p>{company.data.date}</p>
      <Button variant="secondary" className="w-25 m-auto" onClick={handleClick}>Назад</Button>
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
