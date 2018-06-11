
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http/src/client';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { FusionChartsModule } from 'angular4-fusioncharts';
import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UsersComponent } from './users/users.component';
import { UsersService } from './users.service';
import { QuestionsadminComponent } from './questionsadmin/questionsadmin.component';
import { QuestionsService } from './questions.service';

FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme);
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    UsersComponent,
    QuestionsadminComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FusionChartsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
  ],
  providers: [ UsersService, QuestionsService, NavBarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
