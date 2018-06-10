import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { PeopleCardComponent } from './cards/people-card/people-card.component';
import { StarshipCardComponent } from './cards/starship-card/starship-card.component';

@NgModule({
    declarations: [
        AppComponent,
        PeopleCardComponent,
        StarshipCardComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
