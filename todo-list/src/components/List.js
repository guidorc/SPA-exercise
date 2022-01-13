import React, {useEffect} from "react";
import ToDo from "./ToDo";

// Defines the to-do list behaviour
const List = ({folder, todoItems, setTodoItems, item_to_edit_id, setItemToEdit, setEditMode, itemUpdate, setItemUpdate}) => {
    
    // updates the task list for this folder via request to server
    useEffect(() => {
        fetch("http://localhost:8080/folder/getAllTasks", {
            method:"POST", 
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(folder)
        })
        .then(res=>res.json())
        .then(result=>{
            setTodoItems(result);
            console.log("item updated");
        })
    }, [itemUpdate]);
    
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
                        setEditMode={setEditMode}
                        itemUpdate={itemUpdate}
                        setItemUpdate={setItemUpdate}
                    />
                ))}
            </ul>
        </div>
    );
};

export default List;