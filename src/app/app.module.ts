import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componente/navbar/navbar.component';
import { FormularioUnoComponent } from './componente/formulario-uno/formulario-uno.component';
import { FooterComponent } from './componente/footer/footer.component';
import { CarruselComponent } from './componente/carrusel/carrusel.component';
import { LoginComponent } from './componente/login/login.component';
import { MapViewComponent } from './componente/map-view/map-view.component';
import { BlogsComponent } from './componente/blogs/blogs.component';
import { ShopComponent } from './componente/shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormularioUnoComponent,
    FooterComponent,
    CarruselComponent,
    LoginComponent,
    MapViewComponent,
    BlogsComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
