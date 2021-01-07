import { Component } from '@angular/core';
import { SatelliteComponent } from './satellite/satellite.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';
  sourceList: SatelliteComponent[];
  constructor() {
    this.sourceList = [
       new SatelliteComponent("SiriusXM", "Communication", "2009-03-21", "LOW", true),
       new SatelliteComponent("Cat Scanner", "Imaging", "2012-01-05", "LOW", true),
       new SatelliteComponent("Weber Grill", "Space Debris", "1996-03-25", "HIGH", false),
       new SatelliteComponent("GPS 938", "Positioning", "2001-11-01", "HIGH", true),
       new SatelliteComponent("ISS", "Space Station", "1998-11-20", "LOW", true),
    ];
  }
}
