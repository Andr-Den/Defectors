export const BASE_URL = 'http://localhost:3001';

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Ошибка: ${res.status}`);
};

export const getCompanies = () => fetch(`${BASE_URL}`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then(checkResponse)
  .then((res) => res);

  export const getCompany = (_id) => {
    return fetch(`${BASE_URL}/` + _id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(checkResponse)
    .then((res) => {
      return res;
    })
  };

export const addCompany = (name, website, date) => fetch(`${BASE_URL}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name, website, date,
  }),
})
  .then(checkResponse)
  .then((res) => res);

  export const updateCompany = (data) => {
    return fetch(`${BASE_URL}/` + data._id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name, website: data.website, date: data.date,
      }),
    })
    .then(checkResponse)
    .then((res) => {
      return res;
    })
  };

  export const deleteCompany = (data) => {
    return fetch(`${BASE_URL}/` + data._id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(checkResponse)
    .then((res) => {
      return res;
    })
  };
