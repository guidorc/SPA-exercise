package net.proyectoguido.springboot.service;

import net.proyectoguido.springboot.model.Folder;
import net.proyectoguido.springboot.repository.FolderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FolderServiceImplementation implements FolderService {

    @Autowired
    private FolderRepository folderRepository;

    @Override
    public Folder saveFolder(Folder folder) {
        return folderRepository.save(folder);
    }

    @Override
    public List<Folder> getAllFolders() {
        return folderRepository.findAll();
    }

    @Override
    public void deleteFolder(Folder folder){
        folderRepository.deleteById(folder.getId());
    }
}
