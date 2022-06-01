import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  /*
  private apiSeverUrl=" http://localhost:4200/";

  constructor(private http:HttpClient) { }

  public getPokemons():Observable<any>{
      return this.http.get<any>('${apiSeverUrl}/pokemon/all')
  }*/
}
