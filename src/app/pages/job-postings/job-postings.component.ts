import { Component } from '@angular/core';

@Component({
  selector: 'app-job-postings',
  templateUrl: './job-postings.component.html',
  styleUrl: './job-postings.component.css'
})
export class JobPostingsComponent {
  jobs = [1,2,3]
}
