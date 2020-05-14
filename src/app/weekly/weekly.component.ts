import { Component, OnInit } from "@angular/core";
import { WeatherService } from "../shared/weather.service";
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-weekly",
  templateUrl: "./weekly.component.html",
  styleUrls: ["./weekly.component.css"],
})
export class WeeklyComponent implements OnInit {
  forecasts: any = [];
  city: string;
  isLoading: boolean = false;
  error: string;
  subscription: Subscription;
  constructor(private weatherService: WeatherService, private route: Router) {}

  ngOnInit() {
    this.subscription = this.weatherService.locationChange.subscribe(() => {
      this.isLoading = true;
      this.weatherService.getWeekForecast();
    });

    this.subscription = this.weatherService.weatherChange.subscribe(
      (data) => {
        console.log("in weekly data", data);
        this.forecasts = data.list;
        this.city = data.city ? data.city.name : null;
        this.isLoading = false;
        if (data == "City not found") this.error = data;
      }
      // (errorMsg) => {
      //   this.isLoading = false;
      //   console.log(errorMsg);
      //   this.error = errorMsg;
      //   console.log(this.error);
      // }
    );
  }

  onClick(i) {
    this.route.navigate(["daily", i]);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
