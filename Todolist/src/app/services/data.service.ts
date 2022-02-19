import { Injectable } from "@angular/core";
import { collectionData, Firestore } from "@angular/fire/firestore";
import { addDoc, collection } from "firebase/firestore";

export interface Task {
    id?: string;
    title: string;
    description: string;
    create_date: string;
    update_date: string;
}


@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private firestore: Firestore) { }

    getTasks() {
        const taskRef = collection(this.firestore, 'tasks')
        return collectionData(taskRef, { idField: 'id'});
    }

    addTask(task: Task) {
        const tasksRef = collection(this.firestore, 'tasks');
        return addDoc(tasksRef, task)
    }
}