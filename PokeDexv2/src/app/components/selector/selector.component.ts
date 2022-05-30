import { Component, OnInit } from '@angular/core';
import {  } from '../label/label.component';
import { PokeDex } from '../label/services/PokeDex';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {
  name:string="name1";
  hp:number=100;
  attack:number=100;
  defend:number=100;
  picture:string="picture1";
  pokeList: PokeDex[]=[];
 
  

  constructor() { }

  ngOnInit(): void {
    
  }
  Modo(n:number){
    for( let i=0;i<this.pokeList.length;i++)
      if(this.pokeList[i].ID==n){
        this.name=this.pokeList[i].Name;
        this.hp=this.pokeList[i].HP;
        this.attack=this.pokeList[i].Attack;
        this.defend=this.pokeList[i].Defend;
        this.picture=this.pokeList[i].Picture;
      }

}
}