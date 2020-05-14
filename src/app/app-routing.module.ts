import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { WeeklyComponent } from "./weekly/weekly.component";
import { DailyComponent } from "./daily/daily.component";
import { DataComponent } from "./data/data.component";
import { LocationComponent } from "./location/location.component";
import { HomeComponent } from "./home/home.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "week",
    component: WeeklyComponent,
  },
  {
    path: "daily/:id",
    component: DailyComponent,
  },
];
