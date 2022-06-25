import { Component, OnInit } from '@angular/core';
import {pokemon} from "../pokemon/pokemon";
import {HttpClient} from "@angular/common/http";
import {NgxPaginationModule}  from 'ngx-pagination';
import {ImforComponent} from "../imfor/imfor.component";
import {MatDialog} from "@angular/material/dialog";
import { AuthenicationService } from '../login/auth.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  p :number=1;
  public  poke1:pokemon[]=[];
  public pokemons: pokemon[]=[];
  constructor(private http: HttpClient, private  dialog:  MatDialog) {
  }
  ngOnInit(): void {
    let resp= this.http.get("http://localhost:8080/getAllPokemon");
    resp.subscribe( (response: any)=>{
      this.poke1=response;
      this.pokemons=response;
    })
  }

  public show(o:pokemon){
    this.dialog.open(ImforComponent,{ data: {
        message:  o
      }});
  }

  inputPokemon : String='';
  a :pokemon[]=[];
  inputPoke(url: String){
    this.clear();
    this.a=[];
    this.inputPokemon=url;
    for(let i=0;i<this.pokemons.length;i++){
      if((this.pokemons[i].name).toLocaleLowerCase().includes((url).toLocaleLowerCase())) /*{this.p=this.pokemons[i];}*/
        this.a.push((this.pokemons)[i]);
    }
    if(this.a!=[]) this.pokemons=[];
  }

  public clear(){
    this.a=[];
    this.pokemons=this.poke1;
  }



}
