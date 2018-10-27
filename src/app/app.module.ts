import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { TodoService } from './services/todo.service';
import { TodoComponent } from './components/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    TodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
