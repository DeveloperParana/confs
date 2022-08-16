import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeShellComponent } from './subscribe-shell.component';

describe('SubscribeShellComponent', () => {
  let component: SubscribeShellComponent;
  let fixture: ComponentFixture<SubscribeShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubscribeShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SubscribeShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
