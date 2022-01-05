import React from "react";
import ToDo from "./ToDo";

// Defines the to-do list behaviour
const List = ({todoItems, setTodoItems, item_to_edit_id, setItemToEdit, setEditMode}) => {
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {todoItems.map((todo) => (
                    <ToDo 
                        key={todo.id}
                        item={todo}
                        todoItems={todoItems}
                        setTodoItems={setTodoItems}
                        item_to_edit_id={item_to_edit_id}
                        setItemToEdit={setItemToEdit}
                        setEditMode={setEditMode}/>
                ))}
            </ul>
        </div>
    );
};

export default List;