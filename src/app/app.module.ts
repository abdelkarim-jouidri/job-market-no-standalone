import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
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
import { ChildComponent } from './_shared/dashboard-components/child/child.component';
import { AddJobPostingModalComponent } from './_shared/miscellaneous/add-job-posting-modal/add-job-posting-modal.component';
import {MatDialogModule} from '@angular/material/dialog'
import {MatSelectModule} from '@angular/material/select';
import { SelectSkillsComponent } from './_shared/miscellaneous/select-skills/select-skills.component'
import { AuthInterceptor } from './_helpers/interceptors/auth.interceptor';
import { MainComponent } from './_shared/dashboard-components/main/main.component';


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
    DetailedJobPostingComponent,
    ChildComponent,
    SelectSkillsComponent,
    AddJobPostingModalComponent,
    MainComponent
  
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MatDrawerContainer,
    MatDrawer,
    MatDialogModule,
    MatSelectModule
    
  ],
  providers: [
    provideAnimationsAsync(),
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
