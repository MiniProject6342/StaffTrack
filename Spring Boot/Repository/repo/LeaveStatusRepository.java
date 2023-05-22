package com.example.demo.repo;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.entity.LeaveStatus;


	public interface LeaveStatusRepository extends MongoRepository<LeaveStatus, String>{
	     public LeaveStatus findByEmpid(String empid);
	}

