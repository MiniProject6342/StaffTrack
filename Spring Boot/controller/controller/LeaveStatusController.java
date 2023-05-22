package com.example.demo.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.LeaveStatus;
import com.example.demo.repo.LeaveStatusRepository;


@CrossOrigin
@RestController
@RequestMapping("/api/leaves")
public class LeaveStatusController {
	@Autowired
	LeaveStatusRepository repo;
	 
	 @GetMapping(value="/getc/{empid}")
	 @CrossOrigin
	 public LeaveStatus getme(@PathVariable ("empid")String empid)
	 {
		  LeaveStatus demo= repo.findByEmpid(empid);
		  return demo;
		  
	 }
	 
	}
