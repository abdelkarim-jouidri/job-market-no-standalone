import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavbarComponent } from './_shared/navbar/navbar.component';
import { SidebarComponent } from './_shared/sidebar/sidebar.component';
import { MainContentComponent } from './_shared/main-content/main-content.component';
import { JobPostingsComponent } from './pages/job-postings/job-postings.component';
import { JobPostingComponent } from './_shared/job-posting/job-posting.component';
import { DetailedJobPostingComponent } from './_shared/detailed-job-posting/detailed-job-posting.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatDrawerContainer } from '@angular/material/sidenav';
import { MatDrawer } from '@angular/material/sidenav';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HomePageComponent,
    NavbarComponent,
    SidebarComponent,
    MainContentComponent,
    JobPostingsComponent,
    JobPostingComponent,
    DetailedJobPostingComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MatDrawerContainer,
    MatDrawer
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
