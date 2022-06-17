package com.group1.Pokedex.Repo;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.group1.Pokedex.Models.Pokemon;

public interface PokemonRepo extends MongoRepository<Pokemon, String>{
	@Query("{'name': ?0}")
	Optional<Pokemon> findByName(String name);
	
}
