import { Component, Input } from '@angular/core';
import { Satellite } from '../satellite';


@Component({
  selector: 'app-orbit-list',
  templateUrl: './orbit-list.component.html',
  styleUrls: ['./orbit-list.component.css']
  
})


export class OrbitListComponent {
  @Input() satellites: Satellite[];

  displayList: Satellite[];

  constructor() {
  }

   sort(column: string): void {
      this.satellites.sort(function(a: Satellite, b: Satellite): number {
         if(a[column] < b[column]) {
            return -1;
         } else if (a[column] > b[column]) {
            return 1;
         }
            return 0;
      });
   }
}
