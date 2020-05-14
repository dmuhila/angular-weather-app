import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { WeeklyComponent } from "./weekly/weekly.component";
import { DailyComponent } from "./daily/daily.component";
import { RouterModule } from "@angular/router";
import { routes } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { DataComponent } from "./data/data.component";
import { LocationComponent } from "./location/location.component";
import { HomeComponent } from "./home/home.component";
import { LoadingSpinnerComponent } from "./shared/loading-spinner/loading-spinner.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeeklyComponent,
    DailyComponent,
    DataComponent,
    LocationComponent,
    HomeComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(routes)],
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
