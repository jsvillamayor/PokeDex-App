import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import {pokemon} from "../list/pokemon";
import { AuthenicationService} from "../login/auth.service";

@Component({
  selector: 'app-imfor',
  templateUrl: './imfor.component.html',
  styleUrls: ['./imfor.component.css']
})
export class ImforComponent {
  constructor(private  dialogRef:  MatDialogRef<ImforComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any
    , public authenticationService: AuthenicationService) {
  }
  public  closeMe() {
    this.dialogRef.close();
  }
  delete (o:pokemon){

  }
}
