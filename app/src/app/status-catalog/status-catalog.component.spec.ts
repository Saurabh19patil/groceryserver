import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusCatalogComponent } from './status-catalog.component';

describe('StatusCatalogComponent', () => {
  let component: StatusCatalogComponent;
  let fixture: ComponentFixture<StatusCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
