/*import { Component, OnInit } from '@angular/core';
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
  weatherType = '';
  weatherImage = "";

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getWeather();
  }

  getWeather() {
    this.weatherService.getWeather(this.city).subscribe(
      (data: WeatherAPI) => {
        this.weatherData = data;
        this.tempCity = this.weatherData.main.temp;
        //this.weatherData.weather[0].description;
        //this.validateWeatherType(this.weatherData.weather[0].description)
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
    } else if (this.tempCity > 20 && this.tempCity < 30) {
      console.log('ESTA FRESCO')
      this.weatherImage = "../../assets/img/Cloudy.png"
    } else if (this.tempCity > 10 && this.tempCity < 20) {
      console.log('Está frio')
      this.weatherImage = "../../assets/img/Cold.png"
    }
     else if(this.tempCity <10){
      console.log('Super Frio')
      this.weatherImage = "../../assets/img/Snowy.png"
    } else{
      console.log('Ciudad no encontrada')
      this.weatherImage = "../../assets/img/cityNotFound.png"
    }
  }
}

*/

import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { WeatherAPI } from '../interfaces/weatherApi';
import { ModalController } from '@ionic/angular'; // Importar ModalController
import { CityNotFoundModalComponent } from '../city-not-found-modal/city-not-found-modal.component'; // Importar el componente del modal

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  weatherData!: WeatherAPI;
  city: string = 'Guayaquil';
  tempCity: number = 0;
  weatherType = '';
  weatherImage = "";

  constructor(
    private weatherService: WeatherService,
    private modalController: ModalController // Inyectar ModalController
  ) {}

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
        this.showCityNotFoundModal(); // Mostrar el modal si hay un error
      }
    );
  }

  validateTemperatura() {
    if (this.tempCity >= 30) {
      console.log('HACE CALOR');
      this.weatherImage = "../../assets/img/Sunny.png";
    } else if (this.tempCity > 20 && this.tempCity < 30) {
      console.log('ESTA FRESCO');
      this.weatherImage = "../../assets/img/Cloudy.png";
    } else if (this.tempCity > 10 && this.tempCity < 20) {
      console.log('Está frio');
      this.weatherImage = "../../assets/img/Cold.png";
    } else if (this.tempCity < 10) {
      console.log('Super Frio');
      this.weatherImage = "../../assets/img/Snowy.png";
    } else {
      this.showCityNotFoundModal(); // Mostrar el modal si la ciudad no se encuentra
    }
  }

  async showCityNotFoundModal() {
    const modal = await this.modalController.create({
      component: CityNotFoundModalComponent
    });
    return await modal.present(); // Mostrar el modal
  }
}

