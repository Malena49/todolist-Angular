import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { DataService, Task } from '../services/data.service';


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
  task: Task = null;


  constructor(private dataService: DataService, private modalCtrl : ModalController) {
    this.dataService.getTasks().subscribe(res => {
    this.tasks = res; 
    })
    const date = new Date();
   this.currentDate = date.toLocaleDateString('fr-FR');
  }

  async openTask(task) { 
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      componentProps: {id: task.id},
      breakpoints: [0, 0.5, 0.8],
      initialBreakpoint: 0.5
    });
    modal.present()
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

deleteTask() {
 this.dataService.deleteTask(this.task);
  this.modalCtrl.dismiss()

}

}
