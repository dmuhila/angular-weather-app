import { Component, OnInit, Input } from "@angular/core";
import { WeatherService } from "../shared/weather.service";
import { Subscription } from "rxjs";
import { getDate } from "../shared/utils/helper";

@Component({
  selector: "app-data",
  templateUrl: "./data.component.html",
  styleUrls: ["./data.component.css"],
})
export class DataComponent implements OnInit {
  @Input() forecast: any;
  @Input() index: number;
  @Input() isIndividual: boolean;

  constructor(private weatherService: WeatherService) {}
  require: any;
  city: string;
  description: string;
  temp_min: string;
  temp_max: string;
  humidity: string;
  icon: string;
  date: string;
  subscription: Subscription;

  ngOnInit() {
    if (!this.isIndividual) {
      console.log("in data component forecast", this.forecast);
      this.icon = this.forecast.weather[0].icon;
      this.date = getDate(this.forecast.dt);
    } else if (this.isIndividual) {
      console.log("inside isIndiv true");
      this.subscription = this.weatherService.weatherChange.subscribe(
        (data) => {
          console.log("in data compo");
          console.log(data);
          this.icon = data.list[this.index].weather[0].icon;
          this.date = getDate(data.list[this.index].dt);
        }
      );
    }
  }
  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
