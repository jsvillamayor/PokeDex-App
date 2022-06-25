import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import { AuthenticationService } from '../login/auth.service';
import {pokemon} from "../pokemon/pokemon";
import {PokemonService} from "../pokemon/pokemon.service";

@Component({
  selector: 'app-imfor',
  templateUrl: './imfor.component.html',
  styleUrls: ['./imfor.component.css']
})
export class ImforComponent {
  constructor(private  dialogRef:  MatDialogRef<ImforComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any
    ,public authenticationService: AuthenticationService, private pokemonService:PokemonService ) {
  }
  public  closeMe() {
    this.dialogRef.close();
  }
  delete (o:pokemon){
      this.pokemonService.deletePokemon(o.id);
<<<<<<< HEAD
      console.log("hello");
=======
>>>>>>> 25c9b273d6b1b228a5529c94dae7ad570dbb8166
  }
}
