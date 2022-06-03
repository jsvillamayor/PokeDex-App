import { Component, OnInit,Input } from '@angular/core';
import {pokemon} from "../../pokemon";
import {PokemonService} from "../../pokemon.service";
import {HttpClient} from "@angular/common/http";



@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent  {









 /*  public p:pokemon={
  ID:1,
  Name:"Picachu",
  HP: 9999,
  Attack:9999,
  Defend:9999,
  Picture:"picture_addresss"}*/





  /*constructor(private http: HttpClient ) {
  }
  ngOnInit() {
    let resp= this.http.get("http://localhost:8081/pokemon");
    //
    resp.subscribe((data) => console.log(data));

  }
    public getPokemons():void{
    this.pokemonSevice.getPokemons().subscribe(
      (response: pokemon[]) => {
        this.pokemons=response;
        console.log(this.pokemons);

      }
    );
  }*/
}
