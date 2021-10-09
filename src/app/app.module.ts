import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShannonTestComponent } from './shannon-test/shannon-test.component';

@NgModule({
  declarations: [
    AppComponent,
    ShannonTestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
