import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}
