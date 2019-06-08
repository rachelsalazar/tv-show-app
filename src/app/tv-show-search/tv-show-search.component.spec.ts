import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowSearchComponent } from './tv-show-search.component';

describe('TvShowSearchComponent', () => {
  let component: TvShowSearchComponent;
  let fixture: ComponentFixture<TvShowSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvShowSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
