import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AddPersonajeComponent } from './personajes/add-personaje/add-personaje.component';
import { PersonajesDetailComponent } from './personajes/personajes-detail/personajes-detail.component';
import { PersonajesListComponent } from './personajes/personajes-list/personajes-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'personajes',
    component: PersonajesListComponent
  },
  {
    path: 'personajes/add',
    component: AddPersonajeComponent
  },
  {
    path: 'personajes/:id',
    component: PersonajesDetailComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
