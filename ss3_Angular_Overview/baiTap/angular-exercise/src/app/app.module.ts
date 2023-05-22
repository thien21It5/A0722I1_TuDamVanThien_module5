import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './component/calculator/calculator.component';
import {FormsModule} from "@angular/forms";
import { ColorPickerAppComponent } from './component/color-picker-app/color-picker-app.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ColorPickerAppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
