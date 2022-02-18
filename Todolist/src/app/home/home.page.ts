import { Component } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  currentDate: string;

  constructor(private dataService: DataService) {
    this.dataService.getNotes().subscribe(res => {
      console.log(res)
    })
    const date = new Date();
   this.currentDate = date.toLocaleDateString('fr-FR');
  }


}
