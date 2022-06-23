import { Component, OnInit } from '@angular/core';
import {pokemon} from "./pokemon";
import {HttpClient} from "@angular/common/http";
import {NgxPaginationModule}  from 'ngx-pagination';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  p :number=1;
  public pokemons: pokemon[]=[];
  constructor(private http: HttpClient ) {
  }
  ngOnInit(): void {
    let resp= this.http.get("http://localhost:8080/pokemon");
    // resp.subscribe((data) => console.log(data));
    resp.subscribe( (response: any)=>{
      this.pokemons=response;
    })
  }


}
