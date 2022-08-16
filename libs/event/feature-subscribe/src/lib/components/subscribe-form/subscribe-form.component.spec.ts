import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeFormComponent } from './subscribe-form.component';

describe('SubscribeFormComponent', () => {
  let component: SubscribeFormComponent;
  let fixture: ComponentFixture<SubscribeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubscribeFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SubscribeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
