package com.cardealer.cardealer.user;

import java.awt.print.Pageable;

import javax.transaction.Transactional;

import org.springframework.data.domain.Page;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
	
	
	IUserRepository userRepository;
	
	
	PasswordEncoder passwordEncoder;
	

	public UserService(IUserRepository userRepository,PasswordEncoder passwordEncoder) {
		this.passwordEncoder  = passwordEncoder;
		this.userRepository = userRepository;
	}
 

	public void save(User user) {
		System.out.println("Buradasın");

		String encryptedPassword = this.passwordEncoder.encode(user.getPassword());
		System.out.println(user.toString());
		user.setPassword(encryptedPassword);
		
	
			userRepository.save(user);
	}
	

	

}

