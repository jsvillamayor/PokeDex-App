package com.group1.Pokedex.Service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.group1.Pokedex.Models.User;
import com.group1.Pokedex.Repo.UserRepo;

@Service
@Transactional
public class UserService {

	private UserRepo userRepo;
	
	@Autowired
	public UserService(UserRepo userRepo) {
		this.userRepo = userRepo;
	}
	
	public User addUser(User user) {
		user.setPassword(encryptPassword(user.getPassword()));
		return userRepo.save(user);
	}
	
	public String encryptPassword(String rawPassword) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		String encodedPassword = encoder.encode(rawPassword);
		return encodedPassword;
	}
	
}
