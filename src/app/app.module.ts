import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { NavBarAuthComponent } from './core/nav-bar-auth/nav-bar-auth.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavBarAuthComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
