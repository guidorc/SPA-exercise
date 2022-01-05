// Define el comportamiento de la barra para añadir items to-do

import React from "react";

const Bar = ({id, setId, inputText, setInputText, todoItems, setTodoItems}) => {

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
            {text: inputText, completed: false, item_id: id}
        ]);
        // resets the bar text
        setInputText('');
    };

    return(
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitItemHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
    );
}

export default Bar;