import React from "react";
import ToDo from "./ToDo";

// Defines the to-do list behaviour
const List = ({todoItems, setTodoItems}) => {
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {todoItems.map((todo) => (
                    <ToDo 
                        key={todo.item_id} 
                        text={todo.text} 
                        status={todo.completed}
                        todoItems={todo}
                        setTodoItems={setTodoItems}/>
                ))}
            </ul>
        </div>
    );
};

export default List;