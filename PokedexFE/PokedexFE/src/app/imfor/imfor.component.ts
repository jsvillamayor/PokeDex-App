import { HttpErrorResponse } from '@angular/common/http';
import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import { Router } from '@angular/router';
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
    ,public authenticationService: AuthenticationService, private pokemonService:PokemonService, private router: Router ) {
  }
  public  closeMe() {
    this.dialogRef.close();
  }
  delete (o:pokemon){
      this.pokemonService.deletePokemon(o.id).subscribe(
        (response: void) => {
          this.router.navigate(['/list']);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        });
      this.dialogRef.close();
      this.router.navigate(['/list']);
      window.location.reload();
  }
}
