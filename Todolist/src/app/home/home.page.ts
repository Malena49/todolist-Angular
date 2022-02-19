import { Component } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  currentDate: string;
  updatedDate: string;
  tasks = [];
  myTitleTask = "";
  myDescriptionTask = "";
  addTaskBool: boolean;


  constructor(private dataService: DataService) {
    this.dataService.getTasks().subscribe(res => {
    this.tasks = res; 
    })
    const date = new Date();
   this.currentDate = date.toLocaleDateString('fr-FR');
  }

  showForm() {
    this.addTaskBool = !this.addTaskBool;
    this.myTitleTask = '';
    this.myDescriptionTask = '';
  }


 addTask() {
   if(this.myTitleTask === "") {
     alert("veuillez entrer un titre")
   } else {  
 this.dataService.addTask({title: this.myTitleTask, description: this.myDescriptionTask, create_date: this.currentDate, update_date: this.currentDate})
this.showForm();
   }

}

}
