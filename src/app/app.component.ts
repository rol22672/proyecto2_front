import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyecto2Front';

  public isExpanded = true;

  public toggleMenu() {
    this.isExpanded = !this.isExpanded;
  }
}
