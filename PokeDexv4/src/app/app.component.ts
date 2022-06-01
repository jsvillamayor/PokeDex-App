import { Component, OnInit } from '@angular/core';
import {pokemon} from "./pokemon";
import {PokemonService} from "./pokemon.service";
import {error} from "@angular/compiler/src/util";
import {HttpErrorResponse} from "@angular/common/http";




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit{
    private pokemons: pokemon[]=[];

    constructor(private pokemonSevice: PokemonService) {
    }
    ngOnInit() {

    }
/*
  public getPokemons():void{
      this.pokemonSevice.getPokemons().subscribe(
        (response: pokemon[]) => {
          this.pokemons=response;
          (error: HttpErrorResponse)=>{
            alert((error.message));
          }
        }
      );
    }*/

  }


