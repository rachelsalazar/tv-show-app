import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ITvShow } from '../itv-show';
import {map} from 'rxjs/operators';

interface ITvShowData {
  name: string,
  image: {
    medium: string
  },
  summary: string,
  schedule: {
    days: string
  },
  rating: {
    average: number
  }
}

@Injectable({
  providedIn: 'root'
})
export class TvService {

  constructor(private httpClient: HttpClient) { }

  getTvShow(search: string | number) {


    return this.httpClient.get<ITvShowData>(`${environment.baseUrl}api.tvmaze.com/singlesearch/shows?q=${search}&appid=${environment.appId}`).pipe(map(data => this.transformToITvShow(data)))
  }
  private transformToITvShow(data: ITvShowData) : ITvShow {
    return {
      name: data.name,
      image: data.image.medium,
      description: data.summary.replace(/(<([^>]+)>)/ig,""),
      schedule: data.schedule.days,
      rating: data.rating.average
    }
  }
}
