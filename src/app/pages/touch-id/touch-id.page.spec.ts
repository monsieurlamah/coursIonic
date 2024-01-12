import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TouchIdPage } from './touch-id.page';

describe('TouchIdPage', () => {
  let component: TouchIdPage;
  let fixture: ComponentFixture<TouchIdPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TouchIdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
