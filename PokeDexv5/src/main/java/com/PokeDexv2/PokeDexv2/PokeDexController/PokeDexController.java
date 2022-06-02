package com.PokeDexv2.PokeDexv2.PokeDexController;
import com.PokeDexv2.PokeDexv2.PokemonDB.Pokemons;
import com.PokeDexv2.PokeDexv2.PokemonRepo.PokemonRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class PokeDexController {
  @Autowired
  private PokemonRepo pokemonRepo;
  @GetMapping("/")
  public String getPage() {
    return "Welcome";
  }

  @GetMapping(value="/pokemon")
  public List<Pokemons> getPokemons() {
    return pokemonRepo.findAll();
  }
  @PostMapping(value="/save")
  public String saveUser(@RequestBody Pokemons poke){
    pokemonRepo.save(poke);
    return "saved...";
  }
}
