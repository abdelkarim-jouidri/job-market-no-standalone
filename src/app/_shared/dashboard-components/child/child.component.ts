import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddJobPostingModalComponent } from '../../miscellaneous/add-job-posting-modal/add-job-posting-modal.component';
import { RecruiterService } from '../../../_services/recruiter/recruiter.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit {
  myJobs : any;
  constructor(
    public dialog : MatDialog,
    private recruiterService : RecruiterService
  )
    {
  }
  ngOnInit(): void {
    this.myJobs = this.recruiterService.
                      loadMyJobPostings().
                      subscribe(res=>this.myJobs = res, error => console.log(error))
  }

  openDialog(){
    const dialogRef = this.dialog.open(AddJobPostingModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

    dialogRef.afterClosed().subscribe(res=>console.log(res))
  }

  
}
