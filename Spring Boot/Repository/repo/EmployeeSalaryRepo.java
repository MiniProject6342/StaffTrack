package com.example.demo.repo;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.entity.EmployeeSalary;

public interface EmployeeSalaryRepo extends MongoRepository<EmployeeSalary, String> {

	public EmployeeSalary findByEmail(String email);
}
