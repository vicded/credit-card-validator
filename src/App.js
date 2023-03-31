import './App.css';
import React, {useState} from 'react';

import {CardFront, CardBack} from './components/Card/Cards';
import CardForm from './components/CardForm/CardForm';

function App() {  
  const onSaveNameHandler = (data) => {
    const userData = {
      ...data
    }
    console.log('sss', userData);
  }


  return (
    <div className="App">
      <CardFront/>
      <CardBack></CardBack>
      <CardForm
        onSaveName = {onSaveNameHandler}
        ></CardForm>
    </div>
  );
}

export default App;
