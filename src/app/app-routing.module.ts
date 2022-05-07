import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioUnoComponent } from './componente/formulario-uno/formulario-uno.component';
import { CarruselComponent } from './componente/carrusel/carrusel.component';
import { LoginComponent } from './componente/login/login.component';
import { BlogsComponent } from './componente/blogs/blogs.component';
import { ShopComponent } from './componente/shop/shop.component';




const routes: Routes = [
  {path: 'formulario',component:FormularioUnoComponent},
  {path: '',component:CarruselComponent},
  {path: 'login',component:LoginComponent},
  {path: 'blogs',component: BlogsComponent},
  {path: 'shop',component: ShopComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
