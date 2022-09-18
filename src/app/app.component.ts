import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Tasks } from './Models/Task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{
  title = 'to-do';
  today: number = Date.now();
  tasksForm: FormGroup = new FormGroup({});
  displayedColumns: string[] = ['name', 'status', 'deadline', 'comment'];
  tasks: Tasks[] = [
    {status: 1, name: 'Task 1', deadline: '2022-07-14', comment: 'H'},
    {status: 2, name: 'Task 2', deadline: '2022-07-14', comment: 'He'},
    {status: 3, name: 'Task 3', deadline: '2022-07-14', comment: 'Li'},
    {status: 1, name: 'Task 4', deadline: '2022-07-14', comment: 'Be'},
    {status: 2, name: 'Task 5', deadline: '2022-07-14', comment: 'B'},
    {status: 3, name: 'Task 6', deadline: '2022-07-14', comment: 'C'},
    {status: 1, name: 'Task 7', deadline: '2022-07-14', comment: 'N'},
    {status: 2, name: 'Task 8', deadline: '2022-07-14', comment: 'O'},
    {status: 3, name: 'Task 9', deadline: '2022-07-14', comment: 'F'},
    {status: 1, name: 'Task 10', deadline: '2022-07-14', comment: 'Ne'},
  ];
  //dataSource = this.ELEMENT_DATA;
  dataSource = new MatTableDataSource<Tasks>([]);


  /**
   * Task Status => Enum => [Started, In Progress, Done] = 1,2,3; 
   * Deadline: Date
   */
  constructor( private changeDection: ChangeDetectorRef) {
    this.tasksForm = new FormGroup({
      name: new FormControl(''),
      deadline: new FormControl(''),
      status: new FormControl(''),
      comment: new FormControl(''),
  
    });
    
  }
  ngOnInit(): void {
    this.tasksForm = new FormGroup({
      name: new FormControl(''),
      deadline: new FormControl(''),
      status: new FormControl(''),
      comment: new FormControl(''),
  
    });
    this.dataSource.data = this.tasks;
  }

  saveTask() {
    console.log(this.tasksForm);

    let newTask: Tasks = {
      comment: this.tasksForm.get('comment')?.value,
      deadline: this.tasksForm.get('deadline')?.value,
      status: this.tasksForm.get('status')?.value,
      name: this.tasksForm.get('name')?.value,
    }

   this.tasks.push(newTask);

  this.changeDection.detectChanges();
  this.dataSource.data = this.tasks;

    
  }

}




//Test
//Grid
//Save in some light db
//state managment
//azure 

//use mongodb
//save in net core api
//make unit test

//git

//material vs tailwind 