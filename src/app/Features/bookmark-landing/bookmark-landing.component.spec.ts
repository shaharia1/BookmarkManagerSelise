import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkLandingComponent } from './bookmark-landing.component';

describe('BookmarkLandingComponent', () => {
  let component: BookmarkLandingComponent;
  let fixture: ComponentFixture<BookmarkLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarkLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
