package com.springboot.ams.service;

import java.util.List;

import com.springboot.ams.entity.Alumni;
import com.springboot.ams.entity.Department;

//business logic class for admin
public interface DepartmentService { // service class

	// creating department
	Department createDepartment(Department department);

	// fetching all alumnis
	List<Alumni> fetchAlumnis();

	// fetching alunmni by its id
	Alumni fetchAlumniByRoll(Long alroll);
	
	// fetching alumnis by department name
	List<Alumni> fetchAlumniByDname(String dname);
} 
