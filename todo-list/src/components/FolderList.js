import React, { useEffect } from "react";
import Folder from "./Folder";

const FolderList = ({folders, setFolders, folderUpdate, setFolderUpdate}) => {

    // updates the list of folders vis request to server
    useEffect(() => {
        fetch("http://localhost:8080/folder/getAll")
        .then(res=>res.json())
        .then(result=>{
            setFolders(result);
            console.log("folders updated");
        })
    }, [folderUpdate]);

    return(
        <div className="folder-container">
            <ul className="folder-list">
                {folders.map((elem) => (
                    <Folder
                        key={elem.id}
                        folder={elem}
                        folderUpdate={folderUpdate}
                        setFolderUpdate={setFolderUpdate}
                    />
                ))}
            </ul>
        </div>
    );
};

export default FolderList;