package com.springboot.ams.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.ams.entity.Admin;

public interface AdminRepository extends JpaRepository<Admin, String> {

}
