import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormSignInComponent } from './component/form-sign-in/form-sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    FormSignInComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
