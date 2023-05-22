package com.example.demo.repo;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.entity.Leave;
public interface LeaveRepository extends MongoRepository<Leave, String> {
	
}
