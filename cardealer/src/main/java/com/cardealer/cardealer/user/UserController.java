package com.cardealer.cardealer.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import org.slf4j.LoggerFactory;
import org.slf4j.Logger;

@RestController
public class UserController {
	
	
	private static final Logger Log = LoggerFactory.getLogger(UserController.class);
	
	@Autowired
	IUserRepository userRepository;
	
	@PostMapping("/api/1.0/users")
	public void createUser(@RequestBody User user) {
		
		userRepository.save(user);
		Log.info(user.toString());
		
	}
	

}
