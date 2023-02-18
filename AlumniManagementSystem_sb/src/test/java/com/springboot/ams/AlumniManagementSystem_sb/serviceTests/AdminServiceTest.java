package com.springboot.ams.AlumniManagementSystem_sb.serviceTests;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.springboot.ams.entity.Admin;
import com.springboot.ams.entity.Alumni;
import com.springboot.ams.entity.Department;
import com.springboot.ams.repository.AdminRepository;
import com.springboot.ams.repository.AlumniRepository;
import com.springboot.ams.repository.DepartmentRepository;
import com.springboot.ams.service.AdminService;

@SpringBootTest
public class AdminServiceTest {

	@MockBean
	private DepartmentRepository deptRepo;
	@MockBean
	private AlumniRepository alumniRepo;
	@MockBean
	private AdminRepository adminRepo;

	@Autowired
	private AdminService adminServ;

	// testing Admin createAdmin()
	@Test
	public void testCreateAdmin() {

		// creating admin and setting values
		Admin admin1 = new Admin();
		admin1.setAdusername("akash");
		admin1.setAdname("akash");
		admin1.setAdpassword("akash");
		admin1.setAdemail("akash@gmail.com");

		// testing admin using Jpa repository method
		Mockito.when(adminRepo.save(admin1)).thenReturn(admin1);
		// testing admin using admin service method
		assertThat(adminServ.createAdmin(admin1)).isEqualTo(admin1);
	}

	// testing admin fetchAlumnis()
	@Test
	public void testFetchAlumnis() {

		// creating admin and setting values
		Alumni alm1 = new Alumni();
		alm1.setAlroll(1234567891L);
		alm1.setAlpassword("akash1");
		alm1.setAlname("akash1 singh");
		alm1.setAladdress("bihar");
		alm1.setAlphone(6202734731L);
		alm1.setAlemail("manduakash1@gmail.com");
		alm1.setAlpassyear(2022);

		// creating another alumni and setting values
		Alumni alm2 = new Alumni();
		alm2.setAlroll(123456782L);
		alm2.setAlpassword("akash2");
		alm2.setAlname("akash2 singh");
		alm2.setAladdress("bihar");
		alm2.setAlphone(6202734732L);
		alm2.setAlemail("manduakash2@gmail.com");
		alm2.setAlpassyear(2022);

		// creating alumni list and storing alumnis into this list
		List<Alumni> alms = new ArrayList<>();
		alms.add(alm1);
		alms.add(alm2);

		// testing alumni using Jpa repository method
		Mockito.when(alumniRepo.findAll()).thenReturn(alms);
		// testing alumni using alumni service method
		assertThat(adminServ.fetchAlumnis()).isEqualTo(alms);
	}

	// testing admin fetchDepartments()
	@Test
	public void testFetchDepartments() {

		// creating department and setting values
		Department dept1 = new Department();
		dept1.setDname("IT1");
		dept1.setDhead("akash1");
		deptRepo.save(dept1);

		// creating another department and setting values
		Department dept2 = new Department();
		dept1.setDname("IT2");
		dept1.setDhead("akash2");
		deptRepo.save(dept2);

		List<Department> depts = new ArrayList<>();
		depts.add(dept1);
		depts.add(dept2);

		// testing admin using Jpa repository method
		Mockito.when(deptRepo.findAll()).thenReturn(depts);
		// testing admin using admin service method
		assertThat(adminServ.fetchDepartments()).isEqualTo(depts);
	}

	// testing admin fetchAlumniByRoll()
	@Test
	public void testFetchAlumniByRoll() {

		// creating admin and setting values
		Alumni alm1 = new Alumni();
		alm1.setAlroll(1234567893L);
		alm1.setAlpassword("akash3");
		alm1.setAlname("akash3 singh");
		alm1.setAladdress("bihar");
		alm1.setAlphone(6202734733L);
		alm1.setAlemail("manduakash3@gmail.com");
		alm1.setAlpassyear(2022);

		// testing admin using Jpa repository method
		Mockito.when(alumniRepo.findById(1234567893L)).thenReturn(Optional.of(alm1));
		// testing admin using admin service method
		assertThat(adminServ.fetchAlumniByRoll(1234567893L)).isEqualTo(alm1);
	}

	// testing admin changePassword()
	@Test
	public void testChangePassword() {
		// creating admin and setting values
		Admin admin1 = new Admin();
		admin1.setAdusername("akash1");
		admin1.setAdname("akash1");
		admin1.setAdpassword("akash1");
		admin1.setAdemail("akash1@gmail.com");
		
		Optional<Admin> adminOpt = Optional.of(admin1);
		Admin adminUpdt = adminOpt.get();
		
		// finding admin by id
		Mockito.when(adminRepo.findById("akash1")).thenReturn(adminOpt);
		
		// updating password
		adminUpdt.setAdpassword("updatedPass");
		
		// saving updated value
		Mockito.when(adminRepo.save(adminUpdt)).thenReturn(adminUpdt);
		
		// testing with service
		assertThat(adminServ.changePassword("akash1", adminUpdt)).isEqualTo(adminUpdt);
		
	
	}

//	// testing admin deleteAdmin()
//	@Test
//	public void testDeleteAdmin() {
//
//		// creating admin and setting values
//		Admin admin1 = new Admin();
//		admin1.setAdusername("akash1");
//		admin1.setAdname("akash1");
//		admin1.setAdpassword("akash1");
//		admin1.setAdemail("akash1@gmail.com");
//
//		// testing admin using Jpa repository method
//		Mockito.when(adminRepo.deleteById("akash1")).thenReturn();
//		// testing admin using admin service method
//		assertThat(adminServ.deleteAdmin("akash1")).isEqualTo();
//	}

}
