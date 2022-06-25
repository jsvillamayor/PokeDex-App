import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import {pokemon} from "../pokemon/pokemon";
import { AuthenicationService} from "../login/auth.service";
import {UserService} from "../user/user.service";
import {PokemonService} from "../pokemon/pokemon.service";

@Component({
  selector: 'app-imfor',
  templateUrl: './imfor.component.html',
  styleUrls: ['./imfor.component.css']
})
export class ImforComponent {
  constructor(private  dialogRef:  MatDialogRef<ImforComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any
    , public authenticationService: AuthenicationService,private pokemonService:PokemonService ) {
  }
  public  closeMe() {
    this.dialogRef.close();
  }
  delete (o:pokemon){
      this.pokemonService.deletePokemon(o.id);
      console.log("hello");
  }
}
