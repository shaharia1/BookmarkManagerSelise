import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkdetailsComponent } from './bookmarkdetails.component';

describe('BookmarkdetailsComponent', () => {
  let component: BookmarkdetailsComponent;
  let fixture: ComponentFixture<BookmarkdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarkdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
