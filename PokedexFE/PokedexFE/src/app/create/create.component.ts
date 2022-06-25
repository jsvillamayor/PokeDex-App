import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
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
    console.log();
  }
  

  create(){
    this.pokemonService.addPokemon(this.newPoke).subscribe(
      (response: pokemon) => {
        console.log(response);
        this.router.navigate(['/list']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

}
