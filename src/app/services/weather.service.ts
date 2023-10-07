import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(city: string) {
    const url = `${(environment as any).weatherApiBaseUrl}?city=${city}`;
const headers = new HttpHeaders({
  [(environment as any).XRapidAPIKeyHeaderName]: (environment as any).XRapidAPIKeyHeaderValue,
  [(environment as any).XRapidAPIHostHeaderName]: (environment as any).XRapidAPIHostHeaderValue
});

    return this.http.get(url, { headers });
  }
}