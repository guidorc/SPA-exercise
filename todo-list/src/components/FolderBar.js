import React from "react";
//import FolderList from "./FolderList";

// Defines the input text bar behaviour
const FolderBar = ({inputText, setInputText, folderUpdate, setFolderUpdate}) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const createFolder = (e) => {
      // prevents the page from updating
      e.preventDefault();
      // prevents creation of folders with no name
      if(inputText === "") {return};
      // prepare message as js object
      var folderName = {
        text: inputText
      };
      // sends add request to server
      fetch("http://localhost:8080/folder/add", {
        method:"POST", 
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(folderName)
      }).then(() => {
        console.log("Nueva carpeta agregada");
        setFolderUpdate(!folderUpdate);
      })
      // resets the bar text
      setInputText('');
    }

    return(
    <form className="list-form">
      <input placeholder="Nueva Carpeta" value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={createFolder} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
    );
}

export default FolderBar;