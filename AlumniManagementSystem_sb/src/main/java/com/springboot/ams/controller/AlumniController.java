package com.springboot.ams.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.ams.entity.Alumni;
import com.springboot.ams.service.AlumniService;

@RestController
public class AlumniController {

	@Autowired
	private AlumniService alumniService;

	// save alumni detail in db table using rest api PostMapping
	@PostMapping("/alumni/saveAlumni")
	public ResponseEntity<Alumni> saveAlumni(@Valid @RequestBody Alumni alumni) {

		return new ResponseEntity<Alumni>(alumniService.createAlumni(alumni), HttpStatus.CREATED);
	}

	// fetching alumni details from db
	@GetMapping("/alumni/getAlumnis")
	public ResponseEntity<List<Alumni>> getAlumnis() {
		return new ResponseEntity<List<Alumni>>(alumniService.fetchAlumnis(), HttpStatus.OK);
	}

	// fetching alumnis by id
	@GetMapping("/alumni/getAlumnis/{alroll}")
	public ResponseEntity<Alumni> getAlumniByRoll(@PathVariable("alroll") Long alroll) {
		return new ResponseEntity<Alumni>(alumniService.fetchAlumniByRoll(alroll), HttpStatus.OK);
	}

	// update alumni details in db table using rest api PutMapping based on id
	@PutMapping("/alumni/updateAlumni/{alroll}")
	public ResponseEntity<Alumni> updateAlumni(@PathVariable("alroll") Long alroll, @RequestBody Alumni alumni) {
		return new ResponseEntity<Alumni>(alumniService.changePassword(alroll, alumni), HttpStatus.OK);
	}

}
