package com.example.demo.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.EmployeeSalary;
import com.example.demo.repo.EmployeeSalaryRepo;

@RestController
@CrossOrigin
public class EmployeeSalaryController {
		@Autowired
		EmployeeSalaryRepo repo;
		
		@PostMapping("/employeeSalary")
		@CrossOrigin(origins="*")
		public EmployeeSalary addEmployeeSalary(@RequestBody EmployeeSalary emp) {
			String des=emp.getDesignation();
			if(des.equals("seniorasstp")) {
				emp.setBasicSalary(70000);
				emp.setHra(0.15*emp.getBasicSalary());
				emp.setDa(0.15*emp.getBasicSalary());
				emp.setGs(emp.getBasicSalary()+emp.getDa()*2);
			}
	    if(des.equals("asstp")) {
				emp.setBasicSalary(50000);
				emp.setHra(0.15*emp.getBasicSalary());
				emp.setDa(0.15*emp.getBasicSalary());
				emp.setGs(emp.getBasicSalary()+emp.getDa()*2);
			}
	    if(des.equals("prof")) {
				emp.setBasicSalary(30000);
				emp.setHra(0.15*emp.getBasicSalary());
				emp.setDa(0.15*emp.getBasicSalary());
				emp.setGs(emp.getBasicSalary()+emp.getDa()*2);
			}
			return repo.save(emp);
		}
	  @GetMapping(value="/viewSal")
	  public Iterable<EmployeeSalary> getAll(){
	    return repo.findAll();
	  }	
	  @GetMapping("/viewSal/{email}")
	  public EmployeeSalary getSal(@PathVariable ("email")String email){
	    return repo.findByEmail(email);
	  }
	  
	}
