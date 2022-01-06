package net.proyectoguido.springboot.service;

import net.proyectoguido.springboot.model.Folder;
import net.proyectoguido.springboot.model.Task;

import java.util.List;

public interface TaskService {
    public Task saveTask(Task task);
    public List<Task> getAllTasks(Folder folder);
    public void deleteTask(Task task);
    public void completeTask(Task task);
    public void editTask(int id, String text);
}
