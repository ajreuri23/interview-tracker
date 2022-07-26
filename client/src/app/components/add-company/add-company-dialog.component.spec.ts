import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompanyDialog } from './add-company-dialog.component';

describe('AddCompanyComponent', () => {
  let component: AddCompanyDialog;
  let fixture: ComponentFixture<AddCompanyDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCompanyDialog ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCompanyDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
