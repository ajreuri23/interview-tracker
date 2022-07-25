import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseListFilterComponent } from './close-list-filter.component';

describe('CloseListFilterComponent', () => {
  let component: CloseListFilterComponent;
  let fixture: ComponentFixture<CloseListFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloseListFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
