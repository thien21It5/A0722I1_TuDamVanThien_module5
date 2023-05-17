import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FontSizeComponent } from './component/font-size/font-size.component';
import {FormsModule} from '@angular/forms';
import { ShowPetInfoComponent } from './component/show-pet-info/show-pet-info.component';
import { UsingBootstrapComponent } from './component/using-bootstrap/using-bootstrap.component';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeComponent,
    ShowPetInfoComponent,
    UsingBootstrapComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
