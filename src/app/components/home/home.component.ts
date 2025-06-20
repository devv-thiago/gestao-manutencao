import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PoMenuItem, PoModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-home',
  imports: [
    PoModule,
    RouterOutlet
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  menus: Array<PoMenuItem> = [
    {icon: "an-fill an-user-circle", label: "Clientes", link: "clientes"},
    {icon: "an-fill an-bag", label: "Serviços",  link: "servicos"},
    {icon: "an-fill an-newspaper-clipping", label: "Ordem de Serviço", link: "ordens"}
  ];

}
