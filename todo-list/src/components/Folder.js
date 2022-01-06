import React, {useState} from "react";

import Bar from './Bar';
import List from './List';

const Folder = ({folder, folders, setFolders, id, setId}) => {

    const [inputText, setInputText] = useState("");
    const [todoItems, setTodoItems] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [item_to_edit_id, setItemToEdit] = useState(0);
    const [expanded, setExpanded] = useState(false);

    const expandHandler = () => {
        setExpanded(!expanded);
    };

    const deleteHandler = () => {
        // sends delete request to server
        fetch("http://localhost:8080/folder/delete", {
        method:"POST", 
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(folder)
        }).then(() => {
        console.log("carpeta eliminada");
      })
    };

    return (
        <div className="folder">
            <div className="todo">
            <li className={`todo-item`}>
                {folder.text}
            </li>
            <button onClick={expandHandler} className="expand-btn">
                <i className={expanded ? "fas fa-chevron-up" : "fas fa-chevron-down"}></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
            </div>
            <div className="folder-list">
            {expanded &&
            <>
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
            </>}
            </div>
        </div>
    );
};

export default Folder;