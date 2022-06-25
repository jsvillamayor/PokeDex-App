import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {pokemon} from "../pokemon/pokemon";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public newPoke: pokemon=new pokemon();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log();
  }
  create(){

  }

}
