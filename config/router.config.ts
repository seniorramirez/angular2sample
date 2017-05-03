import {UIRouter} from "ui-router-ng2";
import {visualizer} from "ui-router-visualizer";
import {helloState, aboutState, peopleState, personState} from "../states.js";
import {Injector, Injectable} from "@angular/core";
import {PeopleService} from "../services/people.js";

/** UIRouter Config  */
export function uiRouterConfigFn(router: UIRouter, injector: Injector) {
  const peopleService = injector.get(PeopleService);
  
  // Plunker embeds can time out.  
  // Pre-load the people list at startup.
  peopleService.getAllPeople();
  
  // If no URL matches, go to the `hello` state by default
  router.urlService.rules.otherwise({ state: 'hello' });
  
  // Use ui-router-visualizer to show the states as a tree 
  // and transitions as a timeline
  visualizer(router);
}