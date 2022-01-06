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

    public void setId(int id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted() {
        this.completed = !this.completed;
    }

    public int getParent_folder_id() {
        return parent_folder_id;
    }

    public void setParent_folder_id(int parent_folder_id) {
        this.parent_folder_id = parent_folder_id;
    }
}
