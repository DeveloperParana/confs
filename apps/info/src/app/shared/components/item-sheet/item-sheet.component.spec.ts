import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSheetComponent } from './item-sheet.component';

describe('ItemSheetComponent', () => {
  let component: ItemSheetComponent;
  let fixture: ComponentFixture<ItemSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemSheetComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
