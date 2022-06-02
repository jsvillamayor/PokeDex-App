import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})

export class PokemonService {


  private apiSeverUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getPokemons():Observable<any>{
    return this.http.get<any>('http://localhost:8081/pokemon');

  }
}
