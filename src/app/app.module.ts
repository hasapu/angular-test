import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { MaterialModule }       from './material.module';
import { FlexLayoutModule }     from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }            from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExampleComponent }        from './example/example.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent
  ],
  imports     : [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: 'example', component: ExampleComponent }
    ]),
    FlexLayoutModule
  ],
  providers   : [],
  bootstrap   : [AppComponent]
})
export class AppModule {}
