import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { TvService } from './tv.service';

describe('TvService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: TvService = TestBed.get(TvService);
    expect(service).toBeTruthy();
  });
});
