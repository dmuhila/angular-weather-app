import { Component, OnInit } from "@angular/core";
import { WeatherService } from "../shared/weather.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs";
import { convertTemp } from "../shared/utils/helper";

@Component({
  selector: "app-daily",
  templateUrl: "./daily.component.html",
  styleUrls: ["./daily.component.css"],
})
export class DailyComponent implements OnInit {
  index: number;
  isIndividual: boolean;
  city: string;
  icon: string;
  date: number;

  subscription: Subscription;
  //require: any;
  description: string;
  temp_min: string;
  temp_max: string;
  humidity: string;
  constructor(
    private weatherService: WeatherService,
    private router: Router,
    private routes: ActivatedRoute
  ) {}

  ngOnInit() {
    //this.weatherService.getWeather();
    console.log("in daily component init");
    this.routes.params.subscribe((param: Params) => {
      this.index = param["id"];
    });
    this.subscription = this.weatherService.weatherChange.subscribe((data) => {
      console.log("in daily data", data);
      this.city = data.city ? data.city.name : null;

      console.log(data.list.dt);
      this.description = data.list[this.index].weather[0].description;

      //const kelvinToCelsius = require("kelvin-to-celsius");

      this.temp_min = "" + convertTemp(data.list[this.index].temp.min);
      this.temp_max = "" + convertTemp(data.list[this.index].temp.max);
      this.humidity = data.list[this.index].humidity;
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
