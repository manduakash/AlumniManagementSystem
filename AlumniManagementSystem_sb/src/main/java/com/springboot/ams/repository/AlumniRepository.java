package com.springboot.ams.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.springboot.ams.entity.Alumni;

@Repository
public interface AlumniRepository extends JpaRepository<Alumni, Long> {

	// custom crud method
	@Query("FROM Alumni WHERE did = :did")
	List<Alumni> fetchAlumniByDid(int did);
}
