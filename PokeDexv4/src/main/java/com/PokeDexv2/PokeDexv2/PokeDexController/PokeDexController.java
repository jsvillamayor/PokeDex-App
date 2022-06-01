package com.PokeDexv2.PokeDexv2.PokeDexController;
import com.PokeDexv2.PokeDexv2.PokemonDB.Pokemons;
import com.PokeDexv2.PokeDexv2.PokemonRepo.PokemonRepo;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PokeDexController {


  @GetMapping("/")
  public String getPage() {
    return "Welcome";
  }

 /* @GetMapping(value="/pokemons")
  public List<Pokemons> getPokemons() {
    return PokemonRepo.findAll();
  }*/
}
