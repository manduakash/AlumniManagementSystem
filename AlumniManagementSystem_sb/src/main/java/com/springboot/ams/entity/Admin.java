package com.springboot.ams.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
public class Admin {			

	//username validation
	@Id
	@Column(name="adusername", length= 15, nullable=false, unique=true)
	@NotBlank(message="{admin.username.null_Check}")
	@Size(min=5, max=15, message="{admin.username.size_check}")
	private String adusername;
	
	//password validation
//	@JsonIgnore
	@Column(name = "adpassword", length = 25, nullable = false)
	@NotBlank(message="{admin.pass.null_Check}")
	@Size(min=4, max=25, message="{admin.pass.size_check}")
	private String adpassword;
	
	//name validation
	@Column(name = "adname", length = 30, nullable = false)
	@NotBlank(message="{admin.name.null_Check}")
	@Size(min=3, max=30, message="{admin.name.size_check}")
	private String adname;
	
	//email validation
	@Column(name = "ademail", length = 25, nullable = false, unique = true)
	@NotBlank(message="{admin.email.null_Check}")
	@Size(min=11, max=25, message="{admin.email.size_check}")
	@Email(message = "{admin.email.pattern_check}")
	private String ademail;
	
}
