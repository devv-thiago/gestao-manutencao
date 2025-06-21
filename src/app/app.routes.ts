import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ClientesComponent } from './components/menu/clientes/clientes.component';
import { ServicosComponent } from './components/menu/servicos/servicos.component';
import { OrdensComponent } from './components/menu/ordens/ordens.component';

export const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    children: [
      {
        path: "clientes",
        component: ClientesComponent
      },
      {
        path: "servicos",
        component: ServicosComponent
      },
      {
        path: "ordens",
        component: OrdensComponent
      },
    ]
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  }
];
