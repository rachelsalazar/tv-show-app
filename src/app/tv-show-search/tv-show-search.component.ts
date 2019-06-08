import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TvService } from '../tv/tv.service';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-tv-show-search',
  templateUrl: './tv-show-search.component.html',
  styleUrls: ['./tv-show-search.component.css']
})
export class TvShowSearchComponent implements OnInit {

  @Output() searchEvent = new EventEmitter<string>();
  search = new FormControl('', [Validators.minLength(3)])

  constructor(private tvService: TvService) { }

  ngOnInit() {
    this.search.valueChanges 
    .pipe(debounceTime(1000))
    .subscribe((searchValue : string) => {
      if (!this.search.invalid){
        this.searchEvent.emit(searchValue);
    
      }
    })
  }
getErrorMessage() {
  return this.search.hasError('minlength') ? 'Type three of more characters in the search box' : '';
}

}
