import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { JobPostingsComponent } from './pages/job-postings/job-postings.component';
import { JobPostingComponent } from './_shared/job-posting/job-posting.component';
import { DetailedJobPostingComponent } from './_shared/detailed-job-posting/detailed-job-posting.component';
import { SidebarComponent } from './_shared/sidebar/sidebar.component';
import { NavbarComponent } from './_shared/navbar/navbar.component';
import { ChildComponent } from './_shared/dashboard-components/child/child.component';
import { AddJobPostingModalComponent } from './_shared/miscellaneous/add-job-posting-modal/add-job-posting-modal.component';
import { SelectSkillsComponent } from './_shared/miscellaneous/select-skills/select-skills.component';
import { MainComponent } from './_shared/dashboard-components/main/main.component';

const routes: Routes = [
  {path : "login", component : LoginComponent},
  {path : "register", component : RegisterComponent},
  {
    path : "dashboard",
    component : DashboardComponent,
    children : [
      {path : "child", component : ChildComponent},
      {path : "", component : MainComponent},
    ]
  },
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
