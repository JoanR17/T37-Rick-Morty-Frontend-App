import { Component, OnInit } from '@angular/core';
import { PersonajesService } from 'src/app/servicios/personajes.service';

@Component({
  selector: 'app-personajes-list',
  templateUrl: './personajes-list.component.html',
  styleUrls: ['./personajes-list.component.css']
})
export class PersonajesListComponent implements OnInit {

  personajes: any;

  constructor(private personajesService: PersonajesService) {}

  ngOnInit(): void {

    this.personajesService.getPersonajes().subscribe(result => {
      this.personajes = result;
    },
    error => {
      console.log("Problemas");
    });
  }

}
