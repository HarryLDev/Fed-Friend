import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulePComponent } from './schedule-p.component';

describe('SchedulePComponent', () => {
  let component: SchedulePComponent;
  let fixture: ComponentFixture<SchedulePComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchedulePComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchedulePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
