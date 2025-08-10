import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { UwuwufuComponent } from './components/uwuwufu/uwuwufu.component';
import { UwuwufuItemComponent } from './components/uwuwufu-item/uwuwufu-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardContent, MatCardModule, MatCardTitle } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    UwuwufuComponent,
    UwuwufuItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    // MatCardTitleMod,
    // MatCardContent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
