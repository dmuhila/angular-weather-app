import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { WeatherService } from "../shared/weather.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-location",
  templateUrl: "./location.component.html",
  styleUrls: ["./location.component.css"],
})
export class LocationComponent implements OnInit {
  weatherForm: FormGroup;
  @Input() isMain: boolean;
  @Output() sendLocation: EventEmitter<any> = new EventEmitter();
  constructor(private weatherService: WeatherService, private route: Router) {}

  ngOnInit() {
    this.weatherForm = new FormGroup({
      name: new FormControl(""),
    });
    console.log("in oninit", this.weatherForm);
  }

  onSubmit() {
    console.log(this.weatherForm);
    console.log(this.weatherForm.value);
    this.sendLocation.emit(this.weatherForm.value.name);
    this.route.navigate(["week"]);
  }
}
