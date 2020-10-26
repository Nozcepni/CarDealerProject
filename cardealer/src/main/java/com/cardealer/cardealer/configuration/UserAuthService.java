package com.cardealer.cardealer.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.cardealer.cardealer.user.IUserRepository;
import com.cardealer.cardealer.user.User;

@Service
public class UserAuthService implements UserDetailsService{
	
	@Autowired
	IUserRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		User inDB = userRepository.findByUsername(username);
		
		if(inDB==null) {
			throw new UsernameNotFoundException("User not found");
		}
		
		
		return (inDB);
	}

	
	
	
}
