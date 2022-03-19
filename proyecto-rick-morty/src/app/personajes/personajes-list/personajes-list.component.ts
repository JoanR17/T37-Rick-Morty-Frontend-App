import { Component, OnInit } from '@angular/core';
import { Personaje } from 'src/app/models/personaje.model';
import { PersonajesService } from 'src/app/servicios/personajes.service';

@Component({
  selector: 'app-personajes-list',
  templateUrl: './personajes-list.component.html',
  styleUrls: ['./personajes-list.component.css']
})
export class PersonajesListComponent implements OnInit {

  personajes?: Personaje[];

  constructor(private personajesService: PersonajesService) {}

  ngOnInit(): void {

    this.personajesService.getAll().subscribe(result => {
      this.personajes = result;
    },
    error => {
      console.log("Problemas");
    });
  }

}
