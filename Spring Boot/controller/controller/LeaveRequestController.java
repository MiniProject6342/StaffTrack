package com.example.demo.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.LeaveRequest;
import com.example.demo.repo.LeaveRequestRepository;

@CrossOrigin
@RestController
@RequestMapping("/api/leaves")
public class LeaveRequestController {

	   @Autowired
	  private final LeaveRequestRepository leaverep;

	  public LeaveRequestController(LeaveRequestRepository leaverep) {
	    this.leaverep = leaverep;
	  }

	  @GetMapping(value="/get")
	  @CrossOrigin

	  public Iterable<LeaveRequest> getAllLeaves() {
	      return leaverep.findAll();
	  }
	  @GetMapping(value="/get/{empid}")
	  @CrossOrigin
	  public LeaveRequest getme(@PathVariable ("empid")String empid)
	  {
		  LeaveRequest demo= leaverep.findAndUpdate(empid);
		  return demo;
		  
	  }

	  
	  @DeleteMapping("/delete/{empid}")
	  @CrossOrigin
	  public String dele(@PathVariable("empid") String empid)
		{
			
			leaverep.deleteByEmpid(empid);
			
			return "deleted succesfuly";
			
		}
	  
	  @PutMapping("/approve/{empid}")
	  @CrossOrigin
	  public String approve(@PathVariable ("empid")String empid)
	  {
		  LeaveRequest demo=leaverep.findAndUpdate(empid);
			dele(empid);
			leaverep.save(demo);
		  return "approved";
		  
	  }
	  @PutMapping("/reject/{empid}")
	  @CrossOrigin
	  public String reject(@PathVariable ("empid")String empid)
	  {
		  LeaveRequest demo=leaverep.findAndReject(empid);
			dele(empid);
			leaverep.save(demo);
		  return "rejected";
		  
	  }

	  
	}
