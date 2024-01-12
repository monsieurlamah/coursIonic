import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OptPagePage } from './opt-page.page';

describe('OptPagePage', () => {
  let component: OptPagePage;
  let fixture: ComponentFixture<OptPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OptPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
