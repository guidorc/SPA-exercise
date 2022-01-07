import React from "react";

// Defines the to-do list items behaviour
const ToDo = ({item, item_to_edit_id, setItemToEdit, setEditMode}) => {

    // Handles the "delete button clicked" event
    const deleteHandler = () => {
        // sends delete request to server
        fetch("http://localhost:8080/task/delete", {
        method:"POST", 
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(item)
        }).then(() => {
        console.log("Tarea eliminada");
      })
    };

    // Handles the "complete button clicked" event
    const completeHandler = () => {
        // sends edit request to server
        fetch("http://localhost:8080/task/toggle_complete", {
            method:"POST", 
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(item)
        })
    };

    // Handle Edit button pressed
    const editButtonHandler = () => {
        if (item_to_edit_id === item.id) {
            // if this item was already marked to edit, untoggle it
            setEditMode(false);
            setItemToEdit(0);
        } else {
            // else, toggle edit mode for this item
            setEditMode(true);
            setItemToEdit(item.id);
        }
    };

    return (
        <div className="todo">
            <li className={`todo-item ${item.completed ? "completed" : ''} ${item_to_edit_id === item.id ? "editMode" : ''}`}>
                {item.text}
            </li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
            <button onClick={editButtonHandler} className="edit-btn">
                <i className="fas fa-edit"></i>
            </button>
        </div>
    );
};

export default ToDo;