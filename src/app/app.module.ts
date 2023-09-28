import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component'; // Importa el componente

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent // Agrega el componente aquí
  ],
  imports: [
    BrowserModule,
    FormsModule // Agrega FormsModule aquí
  ],
  exports: [
    TaskListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
