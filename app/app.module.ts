import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClasseComponent } from './classe/classe.component';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent,ClasseComponent ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }