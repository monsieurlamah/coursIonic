import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeAddressPage } from './change-address.page';

describe('ChangeAddressPage', () => {
  let component: ChangeAddressPage;
  let fixture: ComponentFixture<ChangeAddressPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChangeAddressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
