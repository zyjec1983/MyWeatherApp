import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherAPI } from './interfaces/weatherApi';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey = '17b80d7d763fb3ece7c0c96a451fef78';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<WeatherAPI> {
    const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`;
    return this.http.get<WeatherAPI>(url);
  }
}
