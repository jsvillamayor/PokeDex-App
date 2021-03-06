package com.group1.Pokedex.Controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.group1.Pokedex.Models.Pokemon;
import com.group1.Pokedex.Service.PokemonService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class PokemonController {

	private final PokemonService pokemonService;
	
	public PokemonController(PokemonService pokemonService) {
		this.pokemonService = pokemonService;
	}
	
	@PostMapping("/addPokemon")
	public ResponseEntity addPokemon(@RequestBody Pokemon pokemon) {
		pokemonService.addPokemon(pokemon);
		return ResponseEntity.status(HttpStatus.CREATED).build();
	}
	
	@GetMapping("/getAllPokemon")
	public ResponseEntity<List<Pokemon>> getAllPokemon() {
		return ResponseEntity.ok(pokemonService.getAllPokemon());
	}
	
	@GetMapping("/get/{name}")
	public ResponseEntity getPokemonByName(@PathVariable String name) {
		return ResponseEntity.ok(pokemonService.getPokemonByName(name));
	}
	
	@DeleteMapping("/delete/{id}")
    public ResponseEntity deletePokemon(@PathVariable String id) {
		System.out.println("trying to delete");
		pokemonService.deletePokemon(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
	
}
