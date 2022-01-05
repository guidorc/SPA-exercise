import React from "react";
import Folder from "./Folder";

const FolderList = ({folders, setFolders, id, setId}) => {
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {folders.map((elem) => (
                    <Folder
                        key={elem.id}
                        folder={elem}
                        folders={folders}
                        setFolders={setFolders}
                        id={id}
                        setId={setId}/>
                ))}
            </ul>
        </div>
    );
};

export default FolderList;