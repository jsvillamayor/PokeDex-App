package com.group1.Pokedex.Controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.group1.Pokedex.Models.Pokemon;
import com.group1.Pokedex.Service.PokemonService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/pokemon")
public class PokemonController {

	private  PokemonService pokemonService;
	
	public PokemonController(PokemonService pokemonService) {
		this.pokemonService = pokemonService;
	}
	
	@PostMapping
	public ResponseEntity addPokemon(@RequestBody Pokemon pokemon) {
		pokemonService.addPokemon(pokemon);
		return ResponseEntity.status(HttpStatus.CREATED).build();
	}
	
	@PutMapping
	public ResponseEntity updatePokemon(@RequestBody Pokemon pokemon) {
		pokemonService.updatePokemon(null);
		return ResponseEntity.ok().build();
	}
	
	@GetMapping
	public ResponseEntity<List<Pokemon>> getAllPokemon() {
		return ResponseEntity.ok(pokemonService.getAllPokemon());
	}
	
	@GetMapping("/{name}")
	public ResponseEntity getPokemonByName(@PathVariable String name) {
		return ResponseEntity.ok(pokemonService.getPokemonByName(name));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity deletePokemon(@PathVariable String id) {
		pokemonService.deletePokemon(id);
		return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
	}
	
}
