import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YourOrderPage } from './your-order.page';

describe('YourOrderPage', () => {
  let component: YourOrderPage;
  let fixture: ComponentFixture<YourOrderPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(YourOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
