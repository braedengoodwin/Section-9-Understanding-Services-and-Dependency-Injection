import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { TasksSerivce } from './app/tasks/tasks.service';
import { InjectionToken } from '@angular/core';

//bootstrapApplication(AppComponent).catch((err) => console.error(err));

export const TasksServiceToken = new InjectionToken<TasksSerivce>(
  'tasks-service-token'
);

bootstrapApplication(AppComponent, {
  providers: [{ provide: TasksServiceToken, useClass: TasksSerivce }],
}).catch((err) => console.error(err));
