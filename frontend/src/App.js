import React from 'react';
import './App.css';
import DefectorsList from './components/DefectorsList/DefectorsList';
import Form from './components/Form/Form'
import * as api from './utils/api'

function App() {
const [companies, setCompanies] = React.useState([])

React.useEffect(() => {
  api.getCompanies()
  .then((result) => {
    setCompanies(result.data)
  }
  )
  .catch((error) => {
    console.log(error)
  })
}, [setCompanies])

  function handleAddCompany(newCompany) {
    api.addCompany(newCompany.name, newCompany.website, newCompany.date)
    .then((newCompany) => {
      setCompanies([newCompany.data, ...companies])
    }
    )
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <div className="App">
      <Form addCompany={handleAddCompany}/>
      <DefectorsList companies={companies}/>
    </div>
  );
}

export default App;
