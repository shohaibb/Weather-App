import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export default class AppComponent implements OnInit {
  title = 'WeatherApp';
  constructor(private weatherService: WeatherService,
    private titleService: Title){}

  cityName: string = 'Dallas';

  weatherData?: WeatherData;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
    this.titleService.setTitle("Weather App!");



  }
  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName = '';
}


  private getWeatherData(cityName: string){
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next: (response) =>{
        this.weatherData = response as WeatherData;
        console.log(response)
      }
    });

  }

}

