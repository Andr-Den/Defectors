import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import './App.css';
import DefectorsList from './components/DefectorsList/DefectorsList';
import AddPage from './components/AddPage/AddPage';

function App() {
  const [addPageOpen, setPageOpen] = React.useState(false);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Button onClick={() => dispatch(setPageOpen(true))} className="mt-3">
        Добавить компанию
      </Button>
      <DefectorsList />
      {addPageOpen ? <AddPage setPageOpen={setPageOpen}/> : ''}
    </div>
  );
}

export default App;
