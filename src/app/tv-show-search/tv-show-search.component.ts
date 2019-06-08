import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TvService } from '../tv/tv.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-tv-show-search',
  templateUrl: './tv-show-search.component.html',
  styleUrls: ['./tv-show-search.component.css']
})
export class TvShowSearchComponent implements OnInit {
  search = new FormControl('', [Validators.minLength(3)])

  constructor(private tvService: TvService) { }

  ngOnInit() {
    this.search.valueChanges 
    .pipe(debounceTime(1000))
    .subscribe((searchValue : string) => {
      if (searchValue) {
        const userInput = searchValue.split(',').map(s => s.trim());
        this.tvService.getTvShow(userInput [0]).subscribe(data => console.log (data))
      }
    })
  }

}
