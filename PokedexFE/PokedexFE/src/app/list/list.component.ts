import { Component, OnInit } from '@angular/core';
import {pokemon} from "./pokemon";
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
  public pokemons: pokemon[]=[];
  constructor(private http: HttpClient, private  dialog:  MatDialog ) {
  }
  ngOnInit(): void {
    let resp= this.http.get("http://localhost:8080/getAllPokemon");
    // resp.subscribe((data) => console.log(data));
    resp.subscribe( (response: any)=>{
      this.pokemons=response;
    })
  }

  public show(o:pokemon){
    this.dialog.open(ImforComponent,{ data: {
        message:  o
      }});
  }


}
