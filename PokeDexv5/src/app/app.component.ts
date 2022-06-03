
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
  private pokemons: pokemon[]=[];
  public pokemons2: pokemon[]=
    [
      {
        ID:1,
        Name:"Picachu",
        HP: 190,
        Attack:200,
        Defend:80,
        Picture:"assets/images/picachu2.png"
      },
      {
        "ID": 2,
        "Name": "Charizard",
        "HP": 500,
        "Attack": 450,
        "Defend": 350,
        "Picture": "assets/images/Charizard.png"
      },
      {
        "ID": 3,
        "Name": "Mewtwo",
        "HP": 300,
        "Attack": 360,
        "Defend": 250,
        "Picture": "assets/images/Mewtwo.png"
      },
      {
        "ID": 4,
        "Name": "Arceus",
        "HP": 10000,
        "Attack": 13000,
        "Defend": 8000,
        "Picture": "assets/images/Arceus.png"
      },
      {
        "ID": 5,
        "Name": "Jigglypuff",
        "HP": 70,
        "Attack": 40,
        "Defend": 20,
        "Picture": "assets/images/Jigglypuff.png"
      },
      {
        "ID": 6,
        "Name": "Snorlax",
        "HP": 130,
        "Attack": 100,
        "Defend": 90,
        "Picture": "assets/images/Snorlax.png"
      }
    ]

  input_url : String='';
  condi: boolean=false;

  inputUrl(url: String){
    this.input_url=url;
    for(let i=0;i<this.pokemons2.length;i++){
      if(this.pokemons2[i].Name==url) {this.condi=true;this.p=this.pokemons2[i]}
    }
  }
  createUrl(url :String){
     this.p=null;this.input_url="";
  }




  constructor(private http: HttpClient ) {
  }
  ngOnInit() {
    let resp= this.http.get("http://localhost:8081/pokemon");
    //
    resp.subscribe((data) => console.log(data));


  }


}


