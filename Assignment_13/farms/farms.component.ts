import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-farms',
  template: `
      <ul>
        <li *ngFor="let farm of farms">
          <a class="astyle" (click)=getDetails(farm._id)>{{farm.Farm}} </a>
        </li>
      </ul>

      {{details1}}
      {{details2}}
   `,
  styles: [`.astyle {text-decoration:underline;cursor:pointer}`]
})
 // <a [routerLink]="['../farmDetials', farm._id]">{{farm.Farm}}</a>
export class FarmsComponent implements OnInit {
  private details1;
  private details2;

  private farms: object[];

  constructor(private db: DbService, private router: Router) {
    this.farms = db.getData();
  }

  getDetails(id) {
    for (let i = 0; i < this.farms.length; i++) {
      if (this.farms[i]._id == id) {
        this.details1 = this.farms[i].Produce[0];
        this.details2 = this.farms[i].Produce[1];
      }
    }
  }

  onNavigate(id) {
    // Imperative Routing
    this.router.navigate(['/farmDetials/' + id]);
  }

  ngOnInit() {
  }
}
