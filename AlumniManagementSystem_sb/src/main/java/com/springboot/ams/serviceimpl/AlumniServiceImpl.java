package com.springboot.ams.serviceimpl;

import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.ams.entity.Alumni;
import com.springboot.ams.entity.Department;
import com.springboot.ams.repository.AlumniRepository;
import com.springboot.ams.repository.DepartmentRepository;
import com.springboot.ams.service.AlumniService;

@Service
public class AlumniServiceImpl implements AlumniService {

	@Autowired
	AlumniRepository alumniRepo;
	@Autowired
	DepartmentRepository deptRepo;

	@Override
	public Alumni createAlumni(Alumni alumni) {
		// saving alumni details using save() of JpaRepository
		Department dept = new Department();
		Department fetchDept = deptRepo.findByDname(alumni.getDepartment().getDname());
		if (fetchDept == null) {
			dept.setDname(alumni.getDepartment().getDname());
			dept.setDhead(alumni.getDepartment().getDhead());
			deptRepo.save(dept);
			alumni.setDepartment(dept);
		}else {
			alumni.setDepartment(fetchDept);
		}
		return alumniRepo.save(alumni);
	}

	@Override
	public List<Alumni> fetchAlumnis() {
		// fetching alumni details based on id using findById() of JpaRepository
		return alumniRepo.findAll();
	}

	@Override
	public Alumni changePassword(long roll, Alumni alumni) {
		// fetching alumni by id
		Alumni newAlumni = alumniRepo.findById(roll)
				.orElseThrow(() -> new EntityNotFoundException("Alumni not updated"));

		// updating value
		newAlumni.setAlpassword(alumni.getAlpassword());
		// saving updated value
		alumniRepo.save(newAlumni);
		// returning updated entity
		return newAlumni;
	}

	@Override
	public Alumni fetchAlumniByRoll(Long alroll) {
		// fetching alumni detail based on id using findById() of JpaRepository
		return alumniRepo.findById(alroll).orElseThrow(() -> new EntityNotFoundException("Alumni is not exist"));

	}

}
