import { Component, OnInit } from '@angular/core';
import { Poke } from './poke';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent  {
  name:string="name1";
  hp:number=100;
  attack:number=100;
  defend:number=100;
  picture:string="picture1";
  pokeList: Poke[]=[
    {
    ID:1,  
    Name:"name1",
    HP:100,
    Attack:100,
    Defend:100,
    Picture:"picture1"},
    {    
    ID:2,  
    Name:"name2",
    HP:200,
    Attack:200,
    Defend:200,
    Picture:"picture2"},
    {
    ID:3,  
    Name:"name3",
    HP:300,
    Attack:300,
    Defend:300,
    Picture:"picture3"},
    {
    ID:4,  
    Name:"name4",
    HP:400,
    Attack:400,
    Defend:400,
    Picture:"picture4"},
    {
    ID:5,  
    Name:"name5",
    HP:500,
    Attack:500,
    Defend:500,
    Picture:"picture5"},

  ];
  
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
  

