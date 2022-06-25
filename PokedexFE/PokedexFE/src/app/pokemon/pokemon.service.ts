import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiServerUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public addPokemon(Pokemon: pokemon): Observable<pokemon>{
    return this.http.post<pokemon>(`${this.apiServerUrl}/addPokemon`, Pokemon);
  }

}
