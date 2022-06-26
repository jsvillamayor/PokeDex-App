import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {pokemon} from "../pokemon/pokemon";
import { PokemonService } from '../pokemon/pokemon.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  newPoke: pokemon = new pokemon();

  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit(): void {
    
  }
  

  create(){
    this.pokemonService.addPokemon(this.newPoke).subscribe(
      (response: pokemon) => {
        this.router.navigate(['/list']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

}
