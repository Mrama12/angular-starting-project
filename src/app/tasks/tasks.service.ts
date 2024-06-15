import { Injectable } from '@angular/core'
import { type Task, type NewTask } from './task/task.model';


@Injectable({ providedIn: 'root'})
export class TasksService {
  addTask(taskData: NewTask, tasks: Task[], selectedId: string) {
    const addingTask: Task = {
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
      userId: selectedId,
      id: 't' + (tasks.length + 1),
    }
    tasks.unshift(addingTask);
    return tasks;
  }

  removeTask(taskId: string, tasks: Task[]) {
    return tasks.filter((task) => {
      return taskId !== task.id;
    });
  }
}

