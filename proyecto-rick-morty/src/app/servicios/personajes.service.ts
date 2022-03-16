import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private http: HttpClient) {}

  getPersonajes()
  {
    return this.http.get("https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8");
  }

  getPersonajeId(id: number)
  {
    return this.http.get(`https://rickandmortyapi.com/api/character/${id}`);
  }
}
