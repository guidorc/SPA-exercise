package net.proyectoguido.springboot.controller;

import net.proyectoguido.springboot.model.Task;
import net.proyectoguido.springboot.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/task")
@CrossOrigin
public class TaskController {

    @Autowired
    private TaskService taskService;

    @PostMapping("/delete")
    public String delete(@RequestBody Task task){
        taskService.deleteTask(task);
        return "Tarea eliminada";
    }

    @PostMapping("/toggle_complete")
    public void complete(@RequestBody Task task){
        taskService.completeTask(task);
    }
}
