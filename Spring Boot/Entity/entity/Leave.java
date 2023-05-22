package com.example.demo.entity;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection = "Leave")
public class Leave {
	    @Id
	    private String id;
	    private String empid;
	    private String employeeName;
	    private String leaveType;
	    private String startDate;
	    private String endDate;
	    private String reason;
	    private String status;
	    public Leave() {}
		public Leave(String id,String empid, String employeeName, String leaveType, String startDate, String endDate, String reason,String status) {
			super();
			this.id = id;
			this.empid=empid;
			this.employeeName = employeeName;
			this.leaveType = leaveType;
			this.startDate = startDate;
			this.endDate = endDate;
			this.reason = reason;
			this.status=status;
		}
		public String getId() {
			return id;
		}
		public void setId(String id) {
			this.id = id;
		}
		
		public String getEmployeeName() {
			return employeeName;
		}
		public void setEmployeeName(String employeeName) {
			this.employeeName = employeeName;
		}
		
		public String getEmpid() {
			return empid;
		}
		public void setEmpid(String empid) {
			this.empid = empid;
		}
		public String getLeaveType() {
			return leaveType;
		}
		public void setLeaveType(String leaveType) {
			this.leaveType = leaveType;
		}
		public String getStartDate() {
			return startDate;
		}
		public void setStartDate(String startDate) {
			this.startDate = startDate;
		}
		public String getEndDate() {
			return endDate;
		}
		public void setEndDate(String endDate) {
			this.endDate = endDate;
		}
		public String getReason() {
			return reason;
		}
		public void setReason(String reason) {
			this.reason = reason;
		}
		public String getStatus() {
			return status;
		}
		public void setStatus(String status) {
			this.status = status;
		}
		@Override
		public String toString() {
			return "Leave [id=" + id + ", empid=" + empid + ", employeeName=" + employeeName + ", leaveType=" + leaveType
					+ ", startDate=" + startDate + ", endDate=" + endDate + ", reason=" + reason + ", status=" + status
					+ "]";
		}
		
	}
