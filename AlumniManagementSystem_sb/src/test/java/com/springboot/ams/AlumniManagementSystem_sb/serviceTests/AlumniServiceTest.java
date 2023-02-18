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
import com.springboot.ams.service.AlumniService;

@SpringBootTest
public class AlumniServiceTest { // alumni service test class

	@MockBean
	private DepartmentRepository deptRepo;
	@MockBean
	private AlumniRepository alumniRepo;

	@Autowired
	private AlumniService alumniServ;

	// testing Alumni createAlumni()
	@Test
	public void testCreateDepartment() {

		// creating alumni and setting values
		Alumni alm1 = new Alumni();
		alm1.setAlroll(1234567890L);
		alm1.setAlpassword("akash");
		alm1.setAlname("akash singh");
		alm1.setAladdress("bihar");
		alm1.setAlphone(6202734730L);
		alm1.setAlemail("manduakash@gmail.com");
		alm1.setAlpassyear(2022);

		Department dept = new Department();
		dept.setDname("IT");
		dept.setDhead("akash");
		
		alm1.setDepartment(dept);
		
		// testing Alumni using Jpa repository method
		Mockito.when(alumniRepo.save(alm1)).thenReturn(alm1);
		// testing Alumni using Alumni service method
		assertThat(alumniServ.createAlumni(alm1)).isEqualTo(alm1);
	}

	// testing alumni fetchAlumnis()
	@Test
	public void testFetchAlumnis() {

		// creating alumni and setting values
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
		assertThat(alumniServ.fetchAlumnis()).isEqualTo(alms);
	}

	// testing alumni fetchAlumniByRoll()
	@Test
	public void testFetchAlumniByRoll() {

		// creating alumni and setting values
		Alumni alm1 = new Alumni();
		alm1.setAlroll(1234567893L);
		alm1.setAlpassword("akash3");
		alm1.setAlname("akash3 singh");
		alm1.setAladdress("bihar");
		alm1.setAlphone(6202734733L);
		alm1.setAlemail("manduakash3@gmail.com");
		alm1.setAlpassyear(2022);

		// testing alumni using Jpa repository method
		Mockito.when(alumniRepo.findById(1234567893L)).thenReturn(Optional.of(alm1));
		// testing alumni using alumni service method
		assertThat(alumniServ.fetchAlumniByRoll(1234567893L)).isEqualTo(alm1);
	}

	// testing alumni changePassword()
	@Test
	public void testChangePassword() {

		// creating alumni and setting values
		Alumni alm1 = new Alumni();
		alm1.setAlroll(1234567894L);
		alm1.setAlpassword("akash4");
		alm1.setAlname("akash4 singh");
		alm1.setAladdress("bihar");
		alm1.setAlphone(6202734734L);
		alm1.setAlemail("manduakash4@gmail.com");
		alm1.setAlpassyear(2022);
		
		Optional<Alumni> almOpt = Optional.of(alm1);
		Alumni almUpdt = almOpt.get();
		
		Mockito.when(alumniRepo.findById(1234567894L)).thenReturn(almOpt);
		
		// updating value
		almUpdt.setAlpassword("updatedpass");
		
		// saving updated values into db
		Mockito.when(alumniRepo.save(almUpdt)).thenReturn(almUpdt);

		// testing alumni using alumni service method
		assertThat(alumniServ.changePassword(1234567894L, almUpdt)).isEqualTo(almUpdt);
	}
}
