package net.proyectoguido.springboot.service;

import net.proyectoguido.springboot.model.Folder;
import net.proyectoguido.springboot.model.Task;
import net.proyectoguido.springboot.repository.FolderRepository;
import net.proyectoguido.springboot.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FolderServiceImplementation implements FolderService {

    @Autowired
    private FolderRepository folderRepository;

    @Autowired
    private TaskRepository taskRepository;

    @Override
    public Folder saveFolder(Folder folder) {
        return folderRepository.save(folder);
    }

    @Override
    public List<Folder> getAllFolders() {
        return folderRepository.findAll();
    }

    @Override
    public void deleteFolder(Folder folder) {
        // Deletes all children tasks
        List<Task> tasks = taskRepository.findAll();
        for (Task t: tasks) {
            if (t.getParent_folder_id() == folder.getId()) {
                taskRepository.deleteById(t.getId());
            }
        }
        // Deletes the folder
        folderRepository.deleteById(folder.getId());
    }
}
