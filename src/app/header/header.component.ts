import { Component, OnInit } from "@angular/core";
import { WeatherService } from "../shared/weather.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  title = "Know your weather";
  constructor(private weatherService: WeatherService, private router: Router) {}

  ngOnInit() {}

  handleLocation(name) {
    this.weatherService.setLocation(name);
    this.router.navigate(["week"]);
  }
}
