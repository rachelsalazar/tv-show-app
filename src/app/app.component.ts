import { Component } from '@angular/core';
import { ITvShow } from './itv-show';
import { TvService } from './tv/tv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tv-show-app';

  tvShow: ITvShow

  constructor(private tvService: TvService) {

  }

doSearch(searchValue){
  if (searchValue) {
    const userInput = searchValue.split(',').map(s => s.trim());
    this.tvService.getTvShow(userInput [0]).subscribe(data => this.tvShow = data)
  } 
}
}

