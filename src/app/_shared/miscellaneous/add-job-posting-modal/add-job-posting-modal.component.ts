import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Skill } from '../../../DTOs/skill.interface';
import { SkillService } from '../../../_services/skill/skill.service';
import { MatDialog } from '@angular/material/dialog';
import { JobPostingService } from '../../../_services/jobPosting/job-posting.service';

@Component({
  selector: 'app-add-job-posting-modal',
  templateUrl: './add-job-posting-modal.component.html',
  styleUrl: './add-job-posting-modal.component.css'
})
export class AddJobPostingModalComponent {
  jobPostingForm!: FormGroup;
  contractTypes = ["CDI", "CDD", "INTERNSHIP", "FREELANCE"];
  skills: any = []; // Load available skills from your data source
  skillsList: Skill[] = [];

  constructor(
    private fb: FormBuilder,
    private skillService : SkillService,
    public dialog : MatDialog,
    private jobsService : JobPostingService
  ) {

  }

  ngOnInit(): void {
    this.loadSkills()
    this.initializeForm();
  }

  private initializeForm() {
    this.jobPostingForm = this.fb.group({
      description: ['', [Validators.required, Validators.minLength(5)]],
      title: ['', [Validators.required, Validators.minLength(3)]],
      contractType: [null, Validators.required],
      skills : []
      
    });
  }


  onSubmit() {
    if (this.jobPostingForm.valid) {
      // Handle form submission here
      const formData = this.jobPostingForm.value;
      this.jobsService.storeJobPosting(
        formData.description,
        formData.title,
        formData.contractType,
        formData.skills
      ).subscribe(res=>console.log(res), error=>console.log(error))
      this.dialog.closeAll()
      console.log(formData);
    }
  }

  private loadSkills() {
    this.skillService.loadSkills().subscribe(
      (skills: Skill[]) => {
        console.log(skills)
        this.skillsList = skills;
      },
      error => {
        console.error('Error loading skills:', error);
      }
    );
  }

  
}
