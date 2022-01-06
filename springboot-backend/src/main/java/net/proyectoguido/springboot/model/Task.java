package net.proyectoguido.springboot.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String text;
    private boolean completed;
    private int parent_folder_id;


    public Task() {
    }

    public int getId() {
        return id;
    }

    public boolean toogleCompleted() {
        this.completed = !this.completed;
        return this.completed;
    }

    public boolean isCompleted() {
        return completed;
    }

    public int getParent_folder_id() {
        return parent_folder_id;
    }

    public String getText() {
        return text;
    }

}
