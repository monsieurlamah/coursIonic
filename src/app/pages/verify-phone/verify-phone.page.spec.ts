import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerifyPhonePage } from './verify-phone.page';

describe('VerifyPhonePage', () => {
  let component: VerifyPhonePage;
  let fixture: ComponentFixture<VerifyPhonePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VerifyPhonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
