package com.springboot.ams.service;

import java.util.List;

import com.springboot.ams.entity.Alumni;

//business logic class for alumni
public interface AlumniService { // service class

	// creating alumni
	Alumni createAlumni(Alumni alumni);

	// fetching all alumnis
	List<Alumni> fetchAlumnis();

	// fetching alunmni by its id
	Alumni fetchAlumniByRoll(Long alroll);

	// updating existing alumni details
	Alumni changePassword(long alroll, Alumni alumni);
}
