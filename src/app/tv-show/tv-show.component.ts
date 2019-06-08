import { Component, OnInit, Input } from '@angular/core';
import { ITvShow } from '../itv-show';
import { TvService } from '../tv/tv.service';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css']
})
export class TvShowComponent implements OnInit {

  @Input() tvShow: ITvShow
  constructor() {
   }

  ngOnInit() {

  }

}
