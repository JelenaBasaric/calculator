import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { AllButtonComponent } from './calculator/all-button/all-button.component';
import { DisplayComponent } from './calculator/display/display.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    AllButtonComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
