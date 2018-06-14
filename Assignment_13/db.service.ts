import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor() { }

  private FarmsObj: object[] = [
    { _id: 1, Farm: 'Natural Prairie 1', Produce: ['lettuce1', 'tomato1'] },
    { _id: 2, Farm: 'Natural Prairie 2', Produce: ['lettuce2', 'tomato2'] },
    { _id: 3, Farm: 'Natural Prairie 3', Produce: ['lettuce3', 'tomato3'] }
  ];

  getData() {
    return this.FarmsObj;
  }

  getDetails(id) {
    for (let i = 0; i < this.FarmsObj.length; i++) {
      if (this.FarmsObj[i][0] == id) {
        return this.FarmsObj[i][2];
      }
    }
  }
}
