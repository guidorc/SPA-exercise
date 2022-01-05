import React, {useState} from "react";
import './App.css';

import Bar from './components/Bar';
import List from './components/List';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header>
        <h1>To-Do List</h1>
      </header>
      <Bar />
      <List />
    </div>
  );
}

export default App;
