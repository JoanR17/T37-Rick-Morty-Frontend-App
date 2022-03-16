import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonajesService } from 'src/app/servicios/personajes.service';

@Component({
  selector: 'app-personajes-detail',
  templateUrl: './personajes-detail.component.html',
  styleUrls: ['./personajes-detail.component.css']
})
export class PersonajesDetailComponent implements OnInit {

  id: any;
  personaje: any;

  constructor(private personajesService: PersonajesService, private _route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this._route.snapshot.paramMap.get('id');

    this.personajesService.getPersonajeId(this.id).subscribe(result => {
      this.personaje = result;
    },
    error => {
      console.log("Problemas");
    });
  }

}
