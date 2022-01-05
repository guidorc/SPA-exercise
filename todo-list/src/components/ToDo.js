import React from "react";

// Defines the to-do list items behaviour
const ToDo = ({item, todoItems, setTodoItems, item_to_edit_id, setItemToEdit, setEditMode}) => {

    // Handles the "delete button clicked" event
    const deleteHandler = () => {
        setTodoItems(todoItems.filter((elem) => elem.id !== item.id));
    };

    // Handles the "complete button clicked" event
    const completeHandler = () => {
        setTodoItems(todoItems.map(elem => {
            if(elem.id === item.id) {
                return {
                    // toggles between complete and incomplete
                    ...elem, completed: !elem.completed
                };
            }
            return elem;
        }))
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