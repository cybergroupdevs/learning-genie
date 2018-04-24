
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http/src/client';
import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UsersComponent } from './users/users.component';
import { UsersService } from './users.service';
import { QuestionsadminComponent } from './questionsadmin/questionsadmin.component';
import { QuestionsService } from './questions.service';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    UsersComponent,
    QuestionsadminComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ UsersService, QuestionsService, NavBarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
