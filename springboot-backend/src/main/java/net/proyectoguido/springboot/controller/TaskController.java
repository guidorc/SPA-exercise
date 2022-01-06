package net.proyectoguido.springboot.controller;

import com.fasterxml.jackson.core.JsonToken;
import net.proyectoguido.springboot.model.EditData;
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

    @PostMapping("/edit")
    public void edit(@RequestBody EditData data){
        int id = data.getId();
        String text = data.getText();
        taskService.editTask(id, text);
    }
}
