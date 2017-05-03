import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './component/app.component';
import { DashboardComponent }   from './component/dashboard.component';
import { HeroDetailComponent }  from './component/hero-detail.component';
import { HeroesComponent }      from './component/heroes.component';
import { HeroService }          from './services/hero.service';
import { PruebaComponent }      from './component/prueba.component';
import { PruebaService }        from './services/prueba.service';

import { AppRoutingModule }     from './component/app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    PruebaComponent
  ],
  providers: [ HeroService, PruebaService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
