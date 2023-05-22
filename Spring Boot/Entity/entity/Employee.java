package com.example.demo.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "employees")
public class Employee {
    @Id
    private String _id;
    private String employeeid;
    private String employeefname;
    private String employeelname;
    private String mobile;
    private String email;
    private String pass;
    private String dept;
    private String desig;
    private String dob;
 
 
    public Employee() {
    	
    }
 
    public Employee(String _id,String employeeid, String employeefname, String employeelname, String mobile, String email, String pass,
			String dept, String desig, String dob) {
		super();
		this._id = _id;
		this.employeeid=employeeid;
		this.employeefname = employeefname;
		this.employeelname = employeelname;
		this.mobile = mobile;
		this.email = email;
		this.pass = pass;
		this.dept = dept;
		this.desig = desig;
		this.dob = dob;
	}
	public String get_id() {
		return _id;
	}
	public void set_id(String _id) {
		this._id = _id;
	}
	public String getEmployeeid() {
		return employeeid;
	}
	public void setEmployeeid( String employeeid) {
		this.employeeid=employeeid;
	}
	public String getEmployeefname() {
		return employeefname;
	}
	public void setEmployeefname(String employeefname) {
		this.employeefname = employeefname;
	}
	public String getEmployeelname() {
		return employeelname;
	}
	public void setEmployeelname(String employeelname) {
		this.employeelname = employeelname;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPass() {
		return pass;
	}
	public void setPass(String pass) {
		this.pass = pass;
	}

	public String getDept() {
		return dept;
	}

	public void setDept(String dept) {
		this.dept = dept;
	}

	public String getDesig() {
		return desig;
	}

	public void setDesig(String desig) {
		this.desig = desig;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	@Override
	public String toString() {
		return "Employee [_id=" + _id +", employeeid=" + employeeid + ", employeefname=" + employeefname + ", employeelname=" + employeelname
				+ ", mobile=" + mobile + ", email=" + email + ", pass=" + pass + ", dept=" + dept + ", desig=" + desig
				+ ", dob=" + dob + "]";
	}

	
}
