package com.springboot.ams.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.ams.entity.Admin;
import com.springboot.ams.entity.Alumni;
import com.springboot.ams.entity.Department;
import com.springboot.ams.service.AdminService;

@RestController
public class AdminController {

	@Autowired
	private AdminService adminService;

	// save admin detail in db table using rest api PostMapping
	@PostMapping("/admin/saveAdmin")
	public ResponseEntity<String> saveAdmin(@Valid @RequestBody Admin admin) {

		adminService.createAdmin(admin);
		return new ResponseEntity<String>("Admin account has been created successfully!", HttpStatus.CREATED);
	}

	// fetching alumni details from db
	@GetMapping("/admin/getAlumnis")
	public ResponseEntity<List<Alumni>> getAlumnis() {

		return new ResponseEntity<List<Alumni>>(adminService.fetchAlumnis(), HttpStatus.OK);
	}

	// fetching department details from db
	@GetMapping("/admin/getDepartments")
	public ResponseEntity<List<Department>> getDepartments() {

		return new ResponseEntity<List<Department>>(adminService.fetchDepartments(), HttpStatus.OK);
	}

	// fetching alumnis by id
	@GetMapping("/admin/getAlumnis/{alroll}")
	public ResponseEntity<Alumni> getAlumniByRoll(@PathVariable("alroll") Long alroll) {
		return new ResponseEntity<Alumni>(adminService.fetchAlumniByRoll(alroll), HttpStatus.OK);
	}

	// update admin details in db table using rest api PutMapping based on id
	@PutMapping("/admin/updateAdmin/{adusername}")
	public ResponseEntity<Admin> updateAdmin(@PathVariable("adusername") String adusername, @RequestBody Admin admin) {
		return new ResponseEntity<Admin>(adminService.changePassword(adusername, admin), HttpStatus.OK);
	}

	// delete admin details in db table using rest api DeleteMapping based on id
	@DeleteMapping("/admin/deleteAdmin/{adusername}")
	public ResponseEntity<String> deleteAdmin(@PathVariable("adusername") String adusername) {
		adminService.deleteAdmin(adusername);
		return new ResponseEntity<String>("Admin deleted Successfully", HttpStatus.OK);
	}

	// delete alumni details in db table using rest api DeleteMapping based on id
	@DeleteMapping("/admin/deleteAlumni/{alroll}")
	public ResponseEntity<String> deleteAlumni(@PathVariable("alroll") Long alroll) {
		adminService.deleteAlumni(alroll);
		return new ResponseEntity<String>("Alumni deleted Successfully", HttpStatus.OK);
	}
}
