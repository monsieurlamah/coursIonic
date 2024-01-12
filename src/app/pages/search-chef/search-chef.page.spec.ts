import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchChefPage } from './search-chef.page';

describe('SearchChefPage', () => {
  let component: SearchChefPage;
  let fixture: ComponentFixture<SearchChefPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SearchChefPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
