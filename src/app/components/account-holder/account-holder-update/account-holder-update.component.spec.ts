import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountHolderUpdateComponent } from './account-holder-update.component';

describe('AccountHolderUpdateComponent', () => {
  let component: AccountHolderUpdateComponent;
  let fixture: ComponentFixture<AccountHolderUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountHolderUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountHolderUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
