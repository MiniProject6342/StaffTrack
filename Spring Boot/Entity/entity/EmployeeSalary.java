package com.example.demo.entity;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "salary")
	public class EmployeeSalary {
	  
	  private String email;
	  private String empId;
		private String designation;
		private double basicSalary;
		private double hra;
		private double da;
		private double gs;

	  public EmployeeSalary(){}

	  public String getEmail(){
	    return email;
	  }
	  public void setEmail(String email){
	    this.email=email;
	  }
	  public String getempId(){
	    return empId;
	  }
	  public void setEmpId(String empId){
	    this.empId=empId;
	  }
		public double getGs() {
			return gs;
		}
		public void setGs(double gs) {
			this.gs = gs;
		}
		public String getDesignation() {
			return designation;
		}
		public void setDesignation(String designation) {
			this.designation = designation;
		}
		public double getBasicSalary() {
			return basicSalary;
		}
		public void setBasicSalary(double basicSalary) {
			this.basicSalary = basicSalary;
		}
		public double getHra() {
			return hra;
		}
		public void setHra(double hra) {
			this.hra = hra;
		}
		public double getDa() {
			return da;
		}
		public void setDa(double da) {
			this.da = da;
		}
		@Override
		public String toString() {
			return "EmployeeSalary [Email="+email+",EmpId="+empId+",designation=" + designation + ", basicSalary=" + basicSalary + ", hra=" + hra + ", da="
					+ da + ", gs=" + gs + "]";
		}
		
		
	}
