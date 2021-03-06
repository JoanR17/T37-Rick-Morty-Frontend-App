import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonajeCardComponent } from './personajes/personaje-card/personaje-card.component';
import { PersonajesListComponent } from './personajes/personajes-list/personajes-list.component';
import { PersonajesDetailComponent } from './personajes/personajes-detail/personajes-detail.component';
import { AddPersonajeComponent } from './personajes/add-personaje/add-personaje.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutComponent,
    PersonajeCardComponent,
    PersonajesListComponent,
    PersonajesDetailComponent,
    AddPersonajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
