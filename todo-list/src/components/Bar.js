import React from "react";

// Defines the input text bar behaviour
const Bar = ({id, setId, inputText, setInputText, todoItems, setTodoItems, editMode, setEditMode, item_to_edit_id, setItemToEdit}) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const submitItemHandler = (e) => {
        // prevents the page from updating
        e.preventDefault();
        // updates item id
        setId(id + 1);
        // adds the new item to de list
        setTodoItems([
            ...todoItems,
            {text: inputText, completed: false, id: id}
        ]);
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
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={editMode ? editItemHandler : submitItemHandler} className={editMode ? "edit-btn" : "todo-button"} type="submit">
        <i className={editMode ? "fas fa-edit" : "fas fa-plus-square"}></i>
      </button>
    </form>
    );
}

export default Bar;