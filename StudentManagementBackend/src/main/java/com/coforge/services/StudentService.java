package com.coforge.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.coforge.entities.Student;
import com.coforge.repositories.StudentRepository;
@Service
public class StudentService {
  @Autowired
  StudentRepository Repository;

  public List<Student> getAllStudents() {
	return Repository.findAll();
	
  }


  public Student addStudent(Student student) {
      return Repository.save(student);
  }
  

  public Student getStudentById(int id) {
        return Repository.findById(id).orElse(null);
    }


}

  

