import { Component, OnInit } from "@angular/core";
import { WeatherService } from "../shared/weather.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(private weatherService: WeatherService, private router: Router) {}

  ngOnInit() {}

  handleLocation(name) {
    this.weatherService.setLocation(name);
    this.router.navigate(["week"]);
  }
}
