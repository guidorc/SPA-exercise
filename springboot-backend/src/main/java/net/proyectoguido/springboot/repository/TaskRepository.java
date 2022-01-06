package net.proyectoguido.springboot.repository;

import net.proyectoguido.springboot.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface TaskRepository extends JpaRepository<Task, Integer> {

    @Transactional
    @Modifying
    @Query("update Task t set t.text = :text WHERE t.id = :taskId")
    void edit(@Param("taskId") int id, @Param("text") String text);

    @Transactional
    @Modifying
    @Query("update Task t set t.completed = :status WHERE t.id = :taskId")
    void complete(@Param("taskId") int id, @Param("status") boolean status);

}
