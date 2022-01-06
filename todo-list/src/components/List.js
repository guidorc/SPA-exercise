import React, {useEffect} from "react";
import ToDo from "./ToDo";

// Defines the to-do list behaviour
const List = ({folder, todoItems, setTodoItems, item_to_edit_id, setItemToEdit, setEditMode}) => {
    
    useEffect(() => {
        fetch("http://localhost:8080/folder/getAllTasks", {
            method:"POST", 
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(folder)
        })
        .then(res=>res.json())
        .then(result=>{
            setTodoItems(result);
        })
    });
    
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