package com.cardealer.cardealer.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cardealer.cardealer.shared.CurrentUser;
import com.cardealer.cardealer.shared.IViews;
import com.cardealer.cardealer.user.IUserRepository;
import com.cardealer.cardealer.user.User;
import com.fasterxml.jackson.annotation.JsonView;



@RestController
public class AuthController {
	
	@Autowired
	IUserRepository userRepository;
	
	
	
	@PostMapping("/api/1.0/auth")
	@JsonView(IViews.Base.class)
	ResponseEntity<?> handleAuthentication(@CurrentUser User user) {
		
		return ResponseEntity.ok(user);
		
	}
	
	

}
