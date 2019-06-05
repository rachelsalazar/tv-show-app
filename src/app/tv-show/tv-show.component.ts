import { Component, OnInit } from '@angular/core';
import { ITvShow } from '../itv-show';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css']
})
export class TvShowComponent implements OnInit {
  tvShow: ITvShow
  constructor() {
    this.tvShow = {
      name: 'The Office',
      image: '',
      description: 'The series depicts the everyday lives of office employees in the Scranton, Pennsylvania branch of the fictional Dunder Mifflin Paper Company. To simulate the look of an actual documentary, it was filmed in a single-camera setup, without a studio audience or a laugh track.',
      schedule: 'Thursdays',
      rating: 8.8
    }
   }

  ngOnInit() {
  }

}
