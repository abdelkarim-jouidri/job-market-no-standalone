import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { JobPostingsComponent } from './pages/job-postings/job-postings.component';
import { JobPostingComponent } from './_shared/job-posting/job-posting.component';
import { DetailedJobPostingComponent } from './_shared/detailed-job-posting/detailed-job-posting.component';

const routes: Routes = [
  {path : "login", component : LoginComponent},
  {path : "register", component : RegisterComponent},
  {path : "dashboard", component : DashboardComponent},
  {path : "", component : HomePageComponent},
  {path : "jobs", component : JobPostingsComponent},
  {path : "job", component : JobPostingComponent},
  {path : "detailedJob", component : DetailedJobPostingComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
