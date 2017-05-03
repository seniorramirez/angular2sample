import {NgModule, Component} from '@angular/core';
import {HttpModule} from '@angular/http';
import {UIRouterModule} from "ui-router-ng2";
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {App} from "./components/app.js";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

import {App} from "./components/app.js";
import {Hello} from "./components/hello.js";
import {About} from "./components/about.js";
import {People} from "./components/people.js";
import {Person} from "./components/person.js";
import {PeopleService} from "./services/people.js";
import {uiRouterConfigFn} from "./config/router.config.js";
import {helloState, aboutState, peopleState, personState} from "./states.js";

let INITIAL_STATES =  [ helloState, aboutState, peopleState, personState ];
let INITIAL_COMPONENTS =  [ App, Hello, About, People, Person ];

/** Angular 2 bootstrap */
@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    UIRouterModule.forRoot({
      states: INITIAL_STATES,
      useHash: true,
      config: uiRouterConfigFn
    })
  ],
  providers: [ 
    { provide: PeopleService, useClass: PeopleService },
  ],
  declarations: INITIAL_COMPONENTS,
  bootstrap: [App],
})
class HelloGalaxyModule {}
  
platformBrowserDynamic().bootstrapModule(HelloGalaxyModule)
    .catch(err => console.error(err));
