import { Injectable } from '@angular/core'
import { type Task, type NewTask } from './task/task.model';
import { DUMMY_TASKS } from '../dummy-tasks';


@Injectable({ providedIn: 'root'})
export class TasksService {

  tasks: Task[] = DUMMY_TASKS;

  addTask(taskData: NewTask, selectedId: string) {
    const addingTask: Task = {
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
      userId: selectedId,
      id: 't' + (this.tasks.length + 1),
    }
    this.tasks.unshift(addingTask);
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => {
      return taskId !== task.id;
    });
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => {
      return task.userId === userId;
    })
  }
}

