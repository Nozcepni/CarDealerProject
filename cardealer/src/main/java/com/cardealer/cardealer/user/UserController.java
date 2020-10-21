package com.cardealer.cardealer.user;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import org.slf4j.LoggerFactory;
import org.slf4j.Logger;

@RestController
public class UserController {
	
	
	private static final Logger Log = LoggerFactory.getLogger(UserController.class);
	
	@PostMapping("/api/1.0/users")
	public void createUser(@RequestBody String user) {
		
		Log.info(user);
		
	}
	

}
