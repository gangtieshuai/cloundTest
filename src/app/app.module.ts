import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';
import { DetailComponent } from './layout/detail/detail.component';
import { HomeComponent } from './layout/home/home.component';
import { GamesComponent } from './layout/games/games.component';
import { FunctionsComponent } from './layout/functions/functions.component';
import { BandCardComponent } from './layout/band-card/band-card.component';
import { ProfileComponent } from './layout/profile/profile.component';
import { CardComponent } from './componet/card/card.component';

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        DetailComponent,
        HomeComponent,
        GamesComponent,
        FunctionsComponent,
        BandCardComponent,
        ProfileComponent,
        CardComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
    ],
    exports: [
        CardComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
