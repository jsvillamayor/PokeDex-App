import { Component, OnInit } from '@angular/core';
import {pokemon} from "./pokemon";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

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

}
