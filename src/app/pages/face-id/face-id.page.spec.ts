import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FaceIdPage } from './face-id.page';

describe('FaceIdPage', () => {
  let component: FaceIdPage;
  let fixture: ComponentFixture<FaceIdPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FaceIdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
