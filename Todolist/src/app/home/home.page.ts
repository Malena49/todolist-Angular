import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  currentDate: string;

  constructor() {
    const date = new Date();
   this.currentDate = date.toLocaleDateString('fr-FR');
  }

}
