package com.springboot.ams.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.Digits;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
public class Alumni {

	//roll no. validation
	@Id
	@Column(name="alroll", length=10, nullable=false, unique=true)
	@NotNull(message="{alm.roll.null_Check}")
	@Digits(integer = 10, fraction = 0, message="{alm.roll.digits_check}")
	@Positive(message="{alm.roll.positive_check}")
	private Long alroll;

	//password validation
	//@JsonIgnore
	@Column(name="alumni_password", length = 25, nullable = false)
	@NotNull(message="{alm.pass.null_Check}")
	@Size(min=5, max=25, message="{alm.pass.size_check}")
	private String alpassword;

	//name validation
	@Column(name="alumni_name", length = 20, nullable = false)
	@NotNull(message="{alm.name.null_Check}")
	@Size(min=3, max=20, message="{alm.name.size_check}")
	private String alname;

	//address validation
	@Column(name="alumni_address", length = 30, nullable = false)
	@NotNull(message="{alm.address.null_Check}")
	@Size(min=4, max=30, message="{alm.address.size_check}")
	private String aladdress;

	//phone validation
	@Column(name="alumni_phone", length = 10, nullable = false)
	@NotNull(message="{alm.phone.null_Check}")
	@Digits(integer = 10, fraction = 0, message="{alm.phone.digits_check}")
	@Positive(message="{alm.phone.positive_check}")
	private Long alphone;

	//email validation
	@Column(name="alumni_email", length = 25, nullable = false, unique = true)
	@NotNull(message="{alm.email.null_Check}")
	@Size(min=11, max=25, message="{alm.email.size_check}")
	@Email(message = "{alm.email.pattern_check}")
	private String alemail;

	//YOP validation
	@Column(name="alumni_passyear", length = 4, nullable = false)
	@NotNull(message="{alm.yop.null_Check}")
	@Digits(integer = 4, fraction = 0, message="{alm.yop.digits_check}")
	@Positive(message="{alm.yop.positive_check}")
	private Integer alpassyear;

	@JsonBackReference
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "did")
	private Department department;
}
