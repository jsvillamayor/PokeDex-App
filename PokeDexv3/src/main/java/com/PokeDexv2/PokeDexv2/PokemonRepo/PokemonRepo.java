package com.PokeDexv2.PokeDexv2.PokemonRepo;
import com.PokeDexv2.PokeDexv2.PokemonDB.Pokemons;
import org.springframework.data.jpa.repository.JpaRepository;


public interface PokemonRepo extends JpaRepository<Pokemons,Long>{

}
