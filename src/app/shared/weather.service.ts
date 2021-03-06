import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject, BehaviorSubject, ReplaySubject, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class WeatherService {
  private location: string;
  locationChange = new ReplaySubject<any>(1);
  weatherChange = new ReplaySubject<any>(1);
  constructor(private http: HttpClient) {}

  getLocation(): string {
    return this.location;
  }

  setLocation(city: string) {
    this.location = city;
    this.locationChange.next(this.location);
  }

  getWeather() {
    console.log("in getWeather", this.location);
    this.http
      .get("https://api.openweathermap.org/data/2.5/weather", {
        params: {
          q: this.location,
          appid: "b714ec74bbab5650795063cb0fdf5fbe",
        },
      })
      .subscribe((res) => {
        console.log("response in  getWeather", res);
        this.weatherChange.next(res);
      });
  }
  getWeekForecast() {
    console.log("in getWeekForecast", this.location);
    this.http
      .get("https://api.openweathermap.org/data/2.5/forecast/daily", {
        params: {
          q: this.location,
          cnt: "5",
          appid: "b714ec74bbab5650795063cb0fdf5fbe",
        },
      })
      .pipe(
        catchError((err) => {
          let errorMsg = "City not found";
          if (err.status == "404") {
            //alert("City not found");
            return throwError(errorMsg);
          }
        })
      )
      .subscribe(
        (res) => {
          this.weatherChange.next(res);
        },
        (err) => {
          console.log(err);
          this.weatherChange.next(err);
        }
      );
  }
}
