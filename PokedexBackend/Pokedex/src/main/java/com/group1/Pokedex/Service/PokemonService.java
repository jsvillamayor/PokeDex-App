package com.group1.Pokedex.Service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.group1.Pokedex.Models.Pokemon;
import com.group1.Pokedex.Repo.PokemonRepo;

@Service
@Transactional
public class PokemonService {

	private PokemonRepo pokemonRepo;
	
	public PokemonService(PokemonRepo pokemonRepo) {
		this.pokemonRepo = pokemonRepo;
	}
	
	public void addPokemon(Pokemon pokemon) {
		pokemonRepo.insert(pokemon);
	}
	
	public void updatePokemon(Pokemon pokemon) {
		Pokemon savedPokemon = pokemonRepo.findById(pokemon.getId()).orElseThrow(() -> new RuntimeException(String.format("Cannot Find pokemon by ID %s", pokemon.getId())));
		savedPokemon.setName(pokemon.getName());
		savedPokemon.setPokedexNumber(pokemon.getPokedexNumber());
		savedPokemon.setHp(pokemon.getHp());
		savedPokemon.setAttack(pokemon.getAttack());
		savedPokemon.setDefend(pokemon.getDefend());
		savedPokemon.setImageUrl(pokemon.getImageUrl());
		
		pokemonRepo.save(savedPokemon);
	}
	
	public List<Pokemon> getAllPokemon() {
		return pokemonRepo.findAll();
	}
	
	public Pokemon getPokemonByName(String name) {
		return pokemonRepo.findByName(name).orElseThrow(() -> new RuntimeException(String.format("Cannot Find pokemon by Name - %s", name)));
	}
	
	public void deletePokemon(String id) {
		pokemonRepo.deleteById(id);
	}
	
}
