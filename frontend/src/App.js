import React from 'react';
import './App.css';
import DefectorsList from './components/DefectorsList/DefectorsList';
import Form from './components/Form/Form';

function App() {
  return (
    <div className="App">
      <Form />
      <DefectorsList />
    </div>
  );
}

export default App;
