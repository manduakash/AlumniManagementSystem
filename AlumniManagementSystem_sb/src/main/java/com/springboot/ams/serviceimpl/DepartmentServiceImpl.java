package com.springboot.ams.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.ams.entity.Alumni;
import com.springboot.ams.entity.Department;
import com.springboot.ams.exception.EntityNotFoundException;
import com.springboot.ams.repository.AlumniRepository;
import com.springboot.ams.repository.DepartmentRepository;
import com.springboot.ams.service.DepartmentService;

@Service
public class DepartmentServiceImpl implements DepartmentService { // service implementation class

	// autowiring the entity repositories to use JpaRespository methods
	@Autowired
	private DepartmentRepository deptRepo;
	@Autowired
	private AlumniRepository alumniRepo;

	@Override
	public Department createDepartment(Department department) {
		// saving department details using save() of JpaRepository
		return deptRepo.save(department);
	}

	@Override
	public List<Alumni> fetchAlumnis() {
		// fetching alumni details based on id using findById() of JpaRepository
		return alumniRepo.findAll();
	}

	@Override
	public Alumni fetchAlumniByRoll(Long alroll) {
		// fetching alumni detail based on id using findById() of JpaRepository
		return alumniRepo.findById(alroll).orElseThrow(() -> new EntityNotFoundException("Alumni is not exist"));
	}

	@Override
	public List<Alumni> fetchAlumniByDname(String dname) {
		// fetching alumnis by department name
		Department dept = deptRepo.findByDname(dname);
		if (dept != null) {
			return dept.getAlumni();
		} else
			return null;
	}

}
