import React from "react";

// Defines the input text bar behaviour
const Bar = ({folder, inputText, setInputText, todoItems, setTodoItems, editMode, setEditMode, item_to_edit_id, setItemToEdit}) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const submitItemHandler = (e) => {
        // prevents the page from updating
        e.preventDefault();
        // prevents creation of items with no name
        if(inputText === "") {return};
        // prepare message as js object
        var newTask = {
            text: inputText,
            completed: false,
            parent_folder_id: folder.id
        };
        // sends add request to server
        fetch("http://localhost:8080/folder/addTask", {
            method:"POST", 
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(newTask)
        }).then(() => {
            console.log("Nueva tarea agregada");
        })
        // resets the bar text
        setInputText('');
    };

    const editItemHandler = (e) => {
        // prevents the page from updating
        e.preventDefault();
        // updates the task list
        setTodoItems(todoItems.map(elem => {
            if(elem.id === item_to_edit_id) {
                return {
                    // updates text
                    ...elem, text: inputText
                };
            }
            return elem;
        }))
        // resets the bar text
        setInputText('');
        // reset edit mode
        setEditMode(false);
        setItemToEdit(0);
    };

    return(
    <form className="listForm">
      <input placeholder="Nueva Tarea" value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={editMode ? editItemHandler : submitItemHandler} className={editMode ? "edit-btn" : "todo-button"} type="submit">
        <i className={editMode ? "fas fa-edit" : "fas fa-plus-square"}></i>
      </button>
    </form>
    );
}

export default Bar;