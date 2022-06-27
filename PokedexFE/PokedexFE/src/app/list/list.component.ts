import { Component, OnInit } from '@angular/core';
import {pokemon} from "../pokemon/pokemon";
import {HttpClient} from "@angular/common/http";
import {NgxPaginationModule}  from 'ngx-pagination';
import {ImforComponent} from "../imfor/imfor.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  p :number=1;
  public  dataHold:pokemon[]=[];
  public pokemons: pokemon[]=[];
  constructor(private http: HttpClient, private  dialog:  MatDialog) {
  }
  ngOnInit(): void {
    let resp= this.http.get("http://localhost:8080/getAllPokemon");
    resp.subscribe( (response: any)=>{
      this.dataHold=response;
      this.pokemons=response;
    })
  }

  public show(object:pokemon){
    this.dialog.open(ImforComponent,{ data: {
        message:  object
      }});
  }

  searchResult :pokemon[]=[];
  SearchPoke(target: String){
    this.clear();
    this.searchResult=[];
    for(let i=0;i<this.pokemons.length;i++){
      if((this.pokemons[i].name).toLocaleLowerCase().includes((target).toLocaleLowerCase()))
        this.searchResult.push((this.pokemons)[i]);
    }
    if(this.searchResult!=[]) this.pokemons=[];
  }

  public clear(){
    this.searchResult=[];
    this.pokemons=this.dataHold;
  }



}
