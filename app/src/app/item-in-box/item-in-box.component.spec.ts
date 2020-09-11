import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemInBoxComponent } from './item-in-box.component';

describe('ItemInBoxComponent', () => {
  let component: ItemInBoxComponent;
  let fixture: ComponentFixture<ItemInBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemInBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemInBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
