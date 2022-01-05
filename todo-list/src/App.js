import React, {useState} from "react";
import './App.css';

import FolderBar from './components/FolderBar';
import FolderList from './components/FolderList';
//import Bar from './components/Bar';
//import List from './components/List';

function App() {

  const [folders, setFolders] = useState([]);
  const [folderInputText, setFolderInputText] = useState("");
  const [id, setId] = useState(1);

  return (
    <div className="App">
      <header>
        <h1>To-Do List</h1>
      </header>
      <FolderBar
        id={id} 
        setId={setId}
        folders={folders}
        setFolders={setFolders}
        inputText={folderInputText}
        setInputText={setFolderInputText}/>
      <FolderList 
        folders={folders}
        setFolders={setFolders}
        id={id}
        setId={setId}
      />
    </div>
  );
}

export default App;
