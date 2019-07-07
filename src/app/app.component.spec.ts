import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule} from '@angular/material';
import { TvShowSearchComponent } from './tv-show-search/tv-show-search.component';
import { TvShowComponent } from './tv-show/tv-show.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TvService } from './tv/tv.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [
        AppComponent,
        TvShowSearchComponent,
        TvShowComponent
      ],
      providers: [TvService],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'tv-show-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('tv-show-app');
  });

  it('should render title in a h2 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Trending Shows');
  });
});
