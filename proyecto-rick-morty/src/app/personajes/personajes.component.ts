import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  personajes: any = null;

  configUrl = 'assets/database.json';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.configUrl).subscribe(result => {
      this.personajes = result;
    },
    error => {
      console.log("Problemas");
    });

  }

}
