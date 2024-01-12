import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyFavouritePage } from './my-favourite.page';

describe('MyFavouritePage', () => {
  let component: MyFavouritePage;
  let fixture: ComponentFixture<MyFavouritePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyFavouritePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
