
import {pokemon} from "./pokemon";
import {PokemonService} from "./pokemon.service";
import {error} from "@angular/compiler/src/util";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {PokemonComponent} from "./components/pokemon/pokemon.component";
import {Component, OnInit} from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit{
  public p:any;
  public pokemons: pokemon[]=[];
  public pokemons2: pokemon[]=
    [
      {
        "id":1,
        "name":"Picachu",
        "hp": 190,
        "attack":200,
        "defend":80,
        "picture":"assets/images/picachu2.png"
      },
      {
        "id": 2,
        "name": "Charizard",
        "hp": 500,
        "attack": 450,
        "defend": 350,
        "picture": "assets/images/charizard.png"
      },
      {
        "id": 3,
        "name": "Mewtwo",
        "hp": 300,
        "attack": 360,
        "defend": 250,
        "picture": "assets/images/mewtwo.png"
      },
      {
        "id": 4,
        "name": "Arceus",
        "hp": 10000,
        "attack": 13000,
        "defend": 8000,
        "picture": "assets/images/arceus.png"
      },
      {
        "id": 5,
        "name": "Jigglypuff",
        "hp": 70,
        "attack": 40,
        "defend": 20,
        "picture": "assets/images/jigglypuff.png"
      },
      {
        "id": 6,
        "name": "Snorlax",
        "hp": 130,
        "attack": 100,
        "defend": 90,
        "picture": "assets/images/snorlax.png"
      },
      {
        "id": 7,
        "name": "StarmieV",
        "hp": 190,
        "attack": 100,
        "defend": 70,
        "picture": "assets/images/starmie.png"
      },

    ]

  constructor(private http: HttpClient ) {
  }
  ngOnInit() {
    let resp= this.http.get("http://localhost:3000/pokemon");
    //resp.subscribe((data) => console.log(data));
    resp.subscribe( (response: any)=>{
      this.pokemons=response;
    })

  }

  inputPokemon : String='';
  condi: boolean=false;

  inputPoke(url: String){
    this.inputPokemon=url;
    for(let i=0;i<this.pokemons.length;i++){
      if((this.pokemons[i].name).toLocaleLowerCase()==(url).toLocaleLowerCase()) {this.condi=true;this.p=this.pokemons[i];}
    }

  }
  clear(url :String){
     this.p=null;this.inputPokemon="";
  }







}


