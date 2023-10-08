import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GeneratorComponent } from './components/generator/generator.component';
import { GenerateDirective } from './directives/generate.directive';
import { GenerateCSVDirective } from './directives/generate-csv.directive';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GeneratorComponent,
    GenerateDirective,
    GenerateCSVDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
