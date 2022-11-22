import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventFeatureShellC4pComponent } from './event-feature-shell-c4p.component';

describe('EventFeatureShellC4pComponent', () => {
  let component: EventFeatureShellC4pComponent;
  let fixture: ComponentFixture<EventFeatureShellC4pComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventFeatureShellC4pComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EventFeatureShellC4pComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
