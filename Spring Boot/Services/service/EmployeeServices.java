package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Employee;
import com.example.demo.repo.EmployeeRepo;

@Service
public class EmployeeServices {
 
    @Autowired
    private EmployeeRepo repo;
 
    public void saveorUpdate(Employee employees) {
 
        repo.save(employees);
    }
 
    public Iterable<Employee> listAll() {
 
        return this.repo.findAll();
    }
 
 
    public void deleteEmployee(String id) {
 
        repo.deleteById(id);
    }
 
    public Employee getEmployeeByEmail(String employeeid) {
 
        return repo.findByEmail(employeeid);
    }
    public Employee getEmployeeById(String id) throws Exception {
    	return repo.findById(id).orElseThrow(() -> new Exception("Element not found!"));
    }
}