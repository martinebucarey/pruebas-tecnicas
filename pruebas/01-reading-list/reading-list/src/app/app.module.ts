import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibrosDispoiblesComponent } from './components/libros-dispoibles/libros-dispoibles.component';

@NgModule({
  declarations: [AppComponent, LibrosDispoiblesComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
