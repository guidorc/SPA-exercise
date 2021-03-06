package net.proyectoguido.springboot.repository;

import net.proyectoguido.springboot.model.Folder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FolderRepository extends JpaRepository<Folder, Integer> {
}
