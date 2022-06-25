import { Component, OnInit } from '@angular/core';
import {pokemon} from "../pokemon/pokemon";
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
    let resp= this.http.get("http://localhost:8080/getAllPokemon");
    // resp.subscribe((data) => console.log(data));
    resp.subscribe( (response: any)=>{
      this.pokemons=response;
    })
  }

  inputPokemon : String='';
  a :pokemon[]=[];
  inputPoke(url: String){
    this.a=[];
    this.inputPokemon=url;
    for(let i=0;i<this.pokemons.length;i++){
      if((this.pokemons[i].name).toLocaleLowerCase().includes((url).toLocaleLowerCase())) /*{this.p=this.pokemons[i];}*/
        this.a.push((this.pokemons)[i]);
    }
  }

  //reset variable to default
  clear(url :String){
    this.a=[];this.inputPokemon="";
  }

}
