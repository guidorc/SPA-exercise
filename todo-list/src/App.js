import React, {useState} from "react";
import './App.css';

import Bar from './components/Bar';
import List from './components/List';

function App() {

  const [inputText, setInputText] = useState("");
  const [todoItems, setTodoItems] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [item_to_edit_id, setItemToEdit] = useState(0);
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
        editMode={editMode}
        setEditMode={setEditMode}
        item_to_edit_id={item_to_edit_id}
        setItemToEdit={setItemToEdit}
      />
      <List 
        todoItems={todoItems} 
        setTodoItems={setTodoItems} 
        item_to_edit_id={item_to_edit_id} 
        setItemToEdit={setItemToEdit} 
        setEditMode={setEditMode}/>
    </div>
  );
}

export default App;
