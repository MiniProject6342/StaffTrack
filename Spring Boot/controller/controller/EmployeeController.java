package com.example.demo.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.Employee;
import com.example.demo.service.EmployeeServices;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/employee")
public class EmployeeController {   
    @Autowired
    private EmployeeServices employeeServices;

    @PostMapping(value = "/save")
    private String saveEmployee(@RequestBody Employee employees) {
        employeeServices.saveorUpdate(employees);
        return employees.get_id();
    }
    
    @GetMapping(value = "/getall")
    public Iterable<Employee> getEmployees() {
        return employeeServices.listAll();
    }
//    @RequestMapping("/getById/{id}")
    @PutMapping(value = "/edit/{id}")
//    @CrossOrigin
    private Employee update(@RequestBody Employee employee, @PathVariable("id") String _id) throws Exception {
//    	Employee emp=employeeServices.getEmployeeById(_id);
        employee.set_id(_id);
//        emp.setEmployeefname(employee.getEmployeefname());
//        emp.setEmployeelname(employee.getEmployeelname());
        employeeServices.saveorUpdate(employee);
        return employee;
    }

    @DeleteMapping("/delete/{id}")
    private void deleteEmployee(@PathVariable("id") String _id) {
        employeeServices.deleteEmployee(_id);
    }


    @RequestMapping("/search/{id}")
    private Employee getEmployees(@PathVariable String _id) {
        return employeeServices.getEmployeeByEmail(_id);
    }
    
    @GetMapping("/login/{email}")
    public Employee login(@PathVariable String email) {
//        
//        String password = loginRequest.getPass();

        return employeeServices.getEmployeeByEmail(email);
//       
    }
    @GetMapping("/getById/{id}")
    public Employee getbyid(@PathVariable String id) throws Exception {
//        
//        String password = loginRequest.getPass();

        return employeeServices.getEmployeeById(id);
//       
    }

}