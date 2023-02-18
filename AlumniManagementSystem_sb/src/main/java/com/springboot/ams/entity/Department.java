package com.springboot.ams.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.Digits;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
public class Department { 

	@Id
	@Column(name = "did", length = 3, nullable = false, unique = true)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	@NotNull(message = "{dept.id.null_check}")
	@Digits(integer = 3, fraction = 0, message = "{dept.id.digits_check}")
	@Positive(message = "{dept.id.positive_check}")
	private Integer did;

	@Column(name = "dname", length = 20, nullable = false)
	@NotNull(message = "{dept.name.null_check}")
	@Size(min = 2, max = 20, message = "{dept.name.size_check}")
	private String dname;

	@Column(name = "dept_head", length = 30, nullable = false)
	@NotNull(message = "{dept.head.null_check}")
	@Size(min = 3, max = 30, message = "{dept.head.size_check}")
	private String dhead;

	@JsonManagedReference
	@OneToMany(mappedBy = "department", cascade = CascadeType.ALL)
	private List<Alumni> alumni;

}
