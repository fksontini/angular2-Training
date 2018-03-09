import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule }from '@angular/forms'
import { AppComponent } from './app.component';
import { ClasseComponent } from './classe/classe.component';

@NgModule({
    imports: [ BrowserModule, FormsModule],
    declarations: [ AppComponent,ClasseComponent ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }