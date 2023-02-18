package com.springboot.ams.serviceimpl;

import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.ams.entity.Admin;
import com.springboot.ams.entity.Alumni;
import com.springboot.ams.entity.Department;
import com.springboot.ams.repository.AdminRepository;
import com.springboot.ams.repository.AlumniRepository;
import com.springboot.ams.repository.DepartmentRepository;
import com.springboot.ams.service.AdminService;

@Service
public class AdminServiceImpl implements AdminService { // service implementation class

	// autowiring the entity repositories to use JpaRespository methods
	@Autowired
	private DepartmentRepository deptRepo;
	@Autowired
	private AlumniRepository alumniRepo;
	@Autowired
	private AdminRepository adminRepo;

	@Override
	public Admin createAdmin(Admin admin) {
		// saving admin details using save() of JpaRepository
		return adminRepo.save(admin);
	}

	@Override
	public List<Alumni> fetchAlumnis() {
		// fetching alumni details based on id using findById() of JpaRepository
		return alumniRepo.findAll();
	}

	@Override
	public List<Department> fetchDepartments() {
		// fetching departments details based on id using findAll() of JpaRepository
		return deptRepo.findAll();
	}

	@Override
	public Alumni fetchAlumniByRoll(Long alroll) {
		// fetching alumni detail based on id using findById() of JpaRepository
		return alumniRepo.findById(alroll).orElseThrow(() -> new EntityNotFoundException("Alumni is not exist"));

	}

	@Override
	public Admin changePassword(String username, Admin admin) {
		// fetching admin by id
		Admin newAdmin = adminRepo.findById(username)
				.orElseThrow(() -> new EntityNotFoundException("Admin not updated"));

		// updating value
		newAdmin.setAdpassword(admin.getAdpassword());
		// saving updated value
		adminRepo.save(newAdmin);
		// returning updated entity
		return newAdmin;
	}

	@Override
	public void deleteAdmin(String username) {
		// deleting admin by id
		adminRepo.deleteById(username);
	}

	@Override
	public void deleteAlumni(Long alroll) {
		// deleting alumni by id
		alumniRepo.deleteById(alroll);
	}

}
