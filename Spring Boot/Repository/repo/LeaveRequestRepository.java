package com.example.demo.repo;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.example.demo.entity.LeaveRequest;

	public interface LeaveRequestRepository extends MongoRepository<LeaveRequest, String> {

		public LeaveRequest findByEmpid(String empid);
		
		

		public default LeaveRequest findAndUpdate(String empid) {
			LeaveRequest e=findByEmpid(empid);
			String status=e.getStatus();
			String newStatus="approve";
			e.setStatus(newStatus);
			String newid=e.getStartDate();
			String namenew=e.getEndDate();
			String reason=e.getReason();
			e.setStartDate(newid);
			e.setEndDate(namenew);
			e.setReason(reason);
			return e;
		}



		public void deleteByEmpid(String empid);



		public default LeaveRequest findAndReject(String empid) {
			LeaveRequest e=findByEmpid(empid);
			String status=e.getStatus();
			String newStatus="reject";
			e.setStatus(newStatus);
			String newid=e.getStartDate();
			String namenew=e.getEndDate();
			String reason=e.getReason();
			e.setStartDate(newid);
			e.setEndDate(namenew);
			e.setReason(reason);
			return e;
		}


		
}
