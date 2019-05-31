import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarAuthComponent } from 'src/app/core/nav-bar/nav-bar-auth/nav-bar-auth.component';
import { NavBarNoAuthComponent } from 'src/app/core/nav-bar/nav-bar-no-auth/nav-bar-no-auth.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NavBarComponent } from './nav-bar.component';

@NgModule({
  declarations: [
    NavBarComponent,
    NavBarAuthComponent,
    NavBarNoAuthComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    NavBarComponent,
    NavBarAuthComponent,
    NavBarNoAuthComponent
  ]
})
export class NavBarModule { }
