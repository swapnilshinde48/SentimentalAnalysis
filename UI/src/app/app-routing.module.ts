import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartsComponent } from './charts/charts.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [ 
  {path: 'home', component: HomeComponent, data: { title: "Home" } },
  {path: 'charts', component: ChartsComponent, data: { title: "Charts" } },
  {path: 'analysis', component: AnalysisComponent, data: { title: "Analysis" } },  
  { path: "home", redirectTo: "/home", pathMatch: "full", data: { title: "Home" }  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
