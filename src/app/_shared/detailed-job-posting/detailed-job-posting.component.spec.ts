import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedJobPostingComponent } from './detailed-job-posting.component';

describe('DetailedJobPostingComponent', () => {
  let component: DetailedJobPostingComponent;
  let fixture: ComponentFixture<DetailedJobPostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailedJobPostingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailedJobPostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
