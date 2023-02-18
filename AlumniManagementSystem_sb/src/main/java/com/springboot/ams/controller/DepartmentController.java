package com.springboot.ams.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.ams.entity.Alumni;
import com.springboot.ams.entity.Department;
import com.springboot.ams.service.DepartmentService;

@RestController
public class DepartmentController {

	@Autowired
	private DepartmentService deptService;

	// save department detail in db table using rest api PostMapping
	@PostMapping("/department/saveDepartment")
	public ResponseEntity<Department> saveDepartment(@Valid @RequestBody Department department) {

		return new ResponseEntity<Department>(deptService.createDepartment(department), HttpStatus.CREATED);
	}

	// fetching department details from db
	@GetMapping("/department/getAlumnis")
	public ResponseEntity<List<Alumni>> getAlumnis() {

		return new ResponseEntity<List<Alumni>>(deptService.fetchAlumnis(), HttpStatus.OK);
	}
	
	// fetching alumnis by id
	@GetMapping("/department/getAlumnis/{alroll}")
	public ResponseEntity<Alumni> getAlumniByRoll(@PathVariable("alroll") Long alroll){
		return new ResponseEntity<Alumni>(deptService.fetchAlumniByRoll(alroll), HttpStatus.OK);
	}
	
	// fetching alumnis by department name
	@GetMapping("/department/getAlumniByDname/{dname}")
	public ResponseEntity<List<Alumni>> getAlumniByDname(@PathVariable("dname") String dname){
		return new ResponseEntity<List<Alumni>>(deptService.fetchAlumniByDname(dname), HttpStatus.OK);
	}
}
