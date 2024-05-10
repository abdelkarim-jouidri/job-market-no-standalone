import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJobPostingModalComponent } from './add-job-posting-modal.component';

describe('AddJobPostingModalComponent', () => {
  let component: AddJobPostingModalComponent;
  let fixture: ComponentFixture<AddJobPostingModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddJobPostingModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddJobPostingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
