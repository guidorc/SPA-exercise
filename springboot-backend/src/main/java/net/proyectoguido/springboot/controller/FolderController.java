package net.proyectoguido.springboot.controller;

import net.proyectoguido.springboot.model.Folder;
import net.proyectoguido.springboot.service.FolderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/folder")
@CrossOrigin
public class FolderController {

    @Autowired
    private FolderService folderService;

    @PostMapping("/add")
    public String add(@RequestBody Folder folder){
        folderService.saveFolder(folder);
        return "nueva carpeta agregada";
    }

    @GetMapping("/getAll")
    public List<Folder> getAllFolders(){
        return folderService.getAllFolders();
    }

    @PostMapping("/delete")
    public String delete(@RequestBody Folder folder){
        folderService.deleteFolder(folder);
        return "carpeta eliminada";
    }
}
