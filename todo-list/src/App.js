import React, {useState} from "react";
import './App.css';

import Bar from './components/Bar';
import List from './components/List';

function App() {

  const [inputText, setInputText] = useState("");
  const [todoItems, setTodoItems] = useState([]);
  const [id, setId] = useState(1);

  return (
    <div className="App">
      <header>
        <h1>To-Do List</h1>
      </header>
      <Bar 
        id={id} 
        setId={setId} 
        inputText={inputText}
        setInputText={setInputText} 
        todoItems={todoItems}
        setTodoItems={setTodoItems} 
      />
      <List todoItems={todoItems} setTodoItems={setTodoItems}/>
    </div>
  );
}

export default App;
