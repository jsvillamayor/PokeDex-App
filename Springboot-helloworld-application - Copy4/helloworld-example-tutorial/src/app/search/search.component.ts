import { Component, OnInit } from '@angular/core';
import {pokemon} from "../list/pokemon";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public p:any;
  public pokemons: pokemon[]=[];
  constructor(private http: HttpClient ) {
  }
  ngOnInit(): void {
    let resp= this.http.get("http://localhost:3000/pokemon");
    // resp.subscribe((data) => console.log(data));
    resp.subscribe( (response: any)=>{
      this.pokemons=response;
    })
  }

  //if user input a pokemon that is found store it
  inputPokemon : String='';
  inputPoke(url: String){
    this.inputPokemon=url;
    for(let i=0;i<this.pokemons.length;i++){
      if((this.pokemons[i].name).toLocaleLowerCase()==(url).toLocaleLowerCase()) {this.p=this.pokemons[i];}
    }
  }

  //reset variable to default
  clear(url :String){
    this.p=null;this.inputPokemon="";
  }

}
