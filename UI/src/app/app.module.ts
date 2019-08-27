import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { ChartsComponent } from './charts/charts.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { ShaddowService } from './services/shaddowService';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { DimensionComponent } from './charts/Dimension/dimension.component';
import { PolarityComponent } from './charts/polarity/polarity.component';
import { PolarityConfidenceComponent } from './charts/polarity-confidence/polarity-confidence.component';
import { SubjectivityComponent } from './charts/subjectivity/subjectivity.component';
import { SubjectivityConfidenceComponent } from './charts/subjectivity-confidence/subjectivity-confidence.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ChartsComponent,
    AnalysisComponent,
    DimensionComponent,
    PolarityComponent,
    PolarityConfidenceComponent,
    SubjectivityComponent,
    SubjectivityConfidenceComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ChartsModule,
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    DialogModule
  ],
  providers: [ShaddowService],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class AppModule { }
