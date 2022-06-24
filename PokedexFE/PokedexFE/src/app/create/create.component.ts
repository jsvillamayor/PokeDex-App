import { Component, OnInit } from '@angular/core';
import {pokemon} from "../list/pokemon";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public newPoke: pokemon=new pokemon();

  constructor() { }

  ngOnInit(): void {
    console.log();
  }

  create(){
    //database. insert(newPoke);
  }

}
