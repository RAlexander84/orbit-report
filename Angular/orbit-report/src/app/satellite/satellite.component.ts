import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-satellite',
  templateUrl: './satellite.component.html',
  styleUrls: ['./satellite.component.css']
})
export class SatelliteComponent implements OnInit {

  name: string;
  type: string;
  launchDate: string;
  orbitType: string;
  operational: boolean;
  

  constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
    this.name
    this.type
    this.launchDate
    this.orbitType
    this.operational
  }

  ngOnInit(): void {
  }

}
