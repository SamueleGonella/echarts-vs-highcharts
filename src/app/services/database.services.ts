import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import * as people from '../database/peopledatalabs.person.json';

@Injectable({
  providedIn: 'root'
})
export class DatabaseServices implements InMemoryDbService {
  constructor() { }
  createDb() {
    return {
      people: people
    };
  }
}
