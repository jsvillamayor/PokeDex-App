package com.group1.Pokedex.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.group1.Pokedex.Models.User;

public interface UserRepo extends JpaRepository<User, Long>{

}
