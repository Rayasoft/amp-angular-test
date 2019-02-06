import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import * as inventory from '../assets/grocery.js';
import { IInventory } from 'src/Models/inventory.model.js';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor() { }
  // get all possible items to select
  get(): Observable<IInventory[]> {
    return new Observable(observer => {
      observer.next(inventory);
    });
  }

}
