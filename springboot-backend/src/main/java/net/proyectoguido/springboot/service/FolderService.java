package net.proyectoguido.springboot.service;

import net.proyectoguido.springboot.model.Folder;

import java.util.List;

public interface FolderService {
    public Folder saveFolder(Folder folder);
    public List<Folder> getAllFolders();
    public void deleteFolder(Folder folder);
}
