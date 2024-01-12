import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookAchefPage } from './book-achef.page';

describe('BookAchefPage', () => {
  let component: BookAchefPage;
  let fixture: ComponentFixture<BookAchefPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BookAchefPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
