package net.proyectoguido.springboot.service;

import net.proyectoguido.springboot.model.Folder;
import net.proyectoguido.springboot.model.Task;
import net.proyectoguido.springboot.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TaskServiceImplementation implements TaskService {

    @Autowired
    private TaskRepository taskRepository;

    @Override
    public Task saveTask(Task task) {
        return taskRepository.save(task);
    }

    @Override
    public List<Task> getAllTasks(Folder folder) {
        List<Task> tasks = taskRepository.findAll();
        List<Task> folderTasks = new ArrayList<Task>();
        int folder_id = folder.getId();
        for (Task t: tasks) {
            int parent_id = t.getParent_folder_id();
            if(parent_id == folder_id) {
                folderTasks.add(t);
            }
        }
        return folderTasks;
    }

    @Override
    public void deleteTask(Task task){
        taskRepository.deleteById(task.getId());
    }

    @Override
    public void completeTask(Task task){
        int id = task.getId();
        boolean status = task.toogleCompleted();
        taskRepository.complete(id, status);
    }

    @Override
    public void editTask(int id, String text){
        taskRepository.edit(id, text);
    }
}
