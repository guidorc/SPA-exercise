import React, { useEffect } from "react";
import Folder from "./Folder";

const FolderList = ({folders, setFolders}) => {

    useEffect(() => {
        fetch("http://localhost:8080/folder/getAll")
        .then(res=>res.json())
        .then(result=>{
            setFolders(result);
        })
    });

    return(
        <div className="folder-container">
            <ul className="folder-list">
                {folders.map((elem) => (
                    <Folder
                        key={elem.id}
                        folder={elem}/>
                ))}
            </ul>
        </div>
    );
};

export default FolderList;