package com.coforge.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.coforge.entities.Student;
import com.coforge.services.StudentService;

@RestController
// @CrossOrigin

public class StudentController {
  @Autowired
  StudentService service;
  @GetMapping("/students")
  public List<Student> getAllStudents(){
	  return service.getAllStudents();
  }

  @PostMapping("/students")
     public Student addStudent(@RequestBody Student student) {
         return service.addStudent(student);
     }

@GetMapping("/students/{id}")
public Student getStudentById(@PathVariable("id") int id) {
    return service.getStudentById(id);
}

	
}
