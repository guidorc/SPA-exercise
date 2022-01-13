import React, {useState} from "react";
import './App.css';

import FolderBar from './components/FolderBar';
import FolderList from './components/FolderList';
//import Bar from './components/Bar';
//import List from './components/List';

function App() {

  const [folders, setFolders] = useState([]);
  const [folderInputText, setFolderInputText] = useState("");
  const [folderUpdate, setFolderUpdate] = useState(false);

  return (
    <div className="App">
      <header>
        <h1>To-Do List</h1>
      </header>
      <FolderBar
        inputText={folderInputText}
        setInputText={setFolderInputText}
        folderUpdate={folderUpdate}
        setFolderUpdate={setFolderUpdate}
      />
      <FolderList 
        folders={folders}
        setFolders={setFolders}
        folderUpdate={folderUpdate}
        setFolderUpdate={setFolderUpdate}
      />
    </div>
  );
}

export default App;
