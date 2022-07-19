import React from 'react'
import Header from './Header'
import Form from './Form'
import List from './List';

import {UglyContextProvider} from './UglyContext'

import './App.css';

function App() {
  return (
    <div className="App">
    <UglyContextProvider>
    <Header />
    <Form />
    <List />
    </UglyContextProvider>
    </div>
  );
}

export default App;
