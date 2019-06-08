import { Component, OnInit } from '@angular/core';
import { ITvShow } from '../itv-show';
import { TvService } from '../tv/tv.service';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css']
})
export class TvShowComponent implements OnInit {
  tvShow: ITvShow
  constructor(private tvService: TvService) {
   }

  ngOnInit() {
    this.tvService.getTvShow('Survivor').subscribe(data => this.tvShow = data);
  }

}
