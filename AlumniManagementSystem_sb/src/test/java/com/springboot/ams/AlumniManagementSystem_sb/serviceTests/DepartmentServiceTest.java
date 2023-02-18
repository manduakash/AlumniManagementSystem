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

import com.springboot.ams.entity.Alumni;
import com.springboot.ams.entity.Department;
import com.springboot.ams.repository.AlumniRepository;
import com.springboot.ams.repository.DepartmentRepository;
import com.springboot.ams.service.DepartmentService;

@SpringBootTest
public class DepartmentServiceTest { // department service test class

	@MockBean
	private DepartmentRepository deptRepo;
	@MockBean
	private AlumniRepository alumniRepo;

	@Autowired
	private DepartmentService deptServ;

	// testing department createDepartment()
	@Test
	public void testCreateDepartment() {

		// creating department object
		Department dept = new Department();
		dept.setDname("IT");
		dept.setDhead("akash");

		// creating alumni and setting values
		Alumni alm1 = new Alumni();
		alm1.setAlroll(1234567890L);
		alm1.setAlpassword("akash");
		alm1.setAlname("akash singh");
		alm1.setAladdress("bihar");
		alm1.setAlphone(6202734730L);
		alm1.setAlemail("manduakash@gmail.com");
		alm1.setAlpassyear(2022);

		// creating another alumni and setting values
		Alumni alm2 = new Alumni();
		alm2.setAlroll(234567891L);
		alm2.setAlpassword("akash1");
		alm2.setAlname("akash1 singh");
		alm2.setAladdress("bihar");
		alm2.setAlphone(6202734731L);
		alm2.setAlemail("manduakash1@gmail.com");
		alm2.setAlpassyear(2022);

		// creating alumni list and storing alumnis into this list
		List<Alumni> alms = new ArrayList<>();
		alms.add(alm1);
		alms.add(alm2);

		// setting alumni list into the department object
		dept.setAlumni(alms);

		// testing department using Jpa repository method
		Mockito.when(deptRepo.save(dept)).thenReturn(dept);
		// testing departmetn using department service method
		assertThat(deptServ.createDepartment(dept)).isEqualTo(dept);
	}

	// testing department fetchAlumnis()
	@Test
	public void testFetchAlumnis() {

		// creating alumni and setting values
		Alumni alm1 = new Alumni();
		alm1.setAlroll(1234567892L);
		alm1.setAlpassword("akash2");
		alm1.setAlname("akash2 singh");
		alm1.setAladdress("bihar");
		alm1.setAlphone(6202734732L);
		alm1.setAlemail("manduakash2@gmail.com");
		alm1.setAlpassyear(2022);

		// creating another alumni and setting values
		Alumni alm2 = new Alumni();
		alm2.setAlroll(123456783L);
		alm2.setAlpassword("akash3");
		alm2.setAlname("akash3 singh");
		alm2.setAladdress("bihar");
		alm2.setAlphone(6202734733L);
		alm2.setAlemail("manduakash3@gmail.com");
		alm2.setAlpassyear(2022);

		// creating alumni list and storing alumnis into this list
		List<Alumni> alms = new ArrayList<>();
		alms.add(alm1);
		alms.add(alm2);

		// testing department using Jpa repository method
		Mockito.when(alumniRepo.findAll()).thenReturn(alms);
		// testing departmetn using department service method
		assertThat(deptServ.fetchAlumnis()).isEqualTo(alms);
	}

	// testing department fetchAlumniByRoll()
	@Test
	public void testFetchAlumniByRoll() {

		// creating alumni and setting values
		Alumni alm1 = new Alumni();
		alm1.setAlroll(1234567894L);
		alm1.setAlpassword("akash4");
		alm1.setAlname("akash4 singh");
		alm1.setAladdress("bihar");
		alm1.setAlphone(6202734734L);
		alm1.setAlemail("manduakash4@gmail.com");
		alm1.setAlpassyear(2022);

		// testing department using Jpa repository method
		Mockito.when(alumniRepo.findById(1234567894L)).thenReturn(Optional.of(alm1));
		// testing departmetn using department service method
		assertThat(deptServ.fetchAlumniByRoll(1234567894L)).isEqualTo(alm1);
	}

}
