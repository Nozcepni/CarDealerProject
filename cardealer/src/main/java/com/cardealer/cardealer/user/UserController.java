package com.cardealer.cardealer.user;

import java.awt.print.Pageable;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cardealer.cardealer.shared.GenericResponse;

@RestController
public class UserController {
	
	@Autowired
	UserService userService;
	
	//private static final Logger Log = LoggerFactory.getLogger(UserController.class);

	@PostMapping("/api/1.0/users/")
	public GenericResponse createUser(@Valid @RequestBody User user) {
		
		userService.save(user);
		return (new GenericResponse("user created"));
	
	}	
	
	

}