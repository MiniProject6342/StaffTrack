package com.example.demo.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.Leave;
import com.example.demo.repo.LeaveRepository;
@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api/v1/leaves")
public class LeaveController {

	    @Autowired
	    private LeaveRepository leaveRepository;
	    @GetMapping(value="/getall")
	    public Iterable<Leave> getAllLeaves() {
	        return leaveRepository.findAll();
	    }

	    @PostMapping(value="/save")
	    public Leave createLeave(@RequestBody Leave leave) {
	        return leaveRepository.save(leave);
	    }
	    
}
