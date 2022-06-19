package com.group1.Pokedex.Controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.group1.Pokedex.Models.Pokemon;
import com.group1.Pokedex.Service.PokemonService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/pokemon")
@CrossOrigin(origins = "http://localhost:4200")
public class PokemonController {

	private final PokemonService pokemonService;

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
  @CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity getPokemonByName(@PathVariable String name) {
		return ResponseEntity.ok(pokemonService.getPokemonByName(name));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity deletePokemon(@PathVariable String id) {
		pokemonService.deletePokemon(id);
		return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
	}

}
