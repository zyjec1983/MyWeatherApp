import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { WeatherAPI } from '../interfaces/weatherApi';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  weatherData!: WeatherAPI;
  city: string = 'Guayaquil';
  tempCity: number = 0;
  weatherImage = "";

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getWeather();
  }

  getWeather() {
    this.weatherService.getWeather(this.city).subscribe(
      (data: WeatherAPI) => {
        this.weatherData = data;
        this.tempCity = this.weatherData.main.temp;
        this.validateTemperatura();
        console.log('Weather: ', this.weatherData);
      },
      err => {
        console.log(err);
      }
    );
  }

  validateTemperatura() {
    if (this.tempCity >= 30) {
      console.log('HACE CALOR')
      this.weatherImage = "../../assets/img/Sunny.png"
    } 
    if (this.tempCity > 20 && this.tempCity < 30) {
      console.log('ESTA FRESCO')
      this.weatherImage = "../../assets/img/Cloudy.png"
    }
  }
}

