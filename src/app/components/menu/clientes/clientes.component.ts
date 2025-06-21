import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoModule, PoPageModule, PoTableAction, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'app-clientes',
  imports: [
    CommonModule,
    PoPageModule,
    PoModule,
  ],
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  columns: Array<PoTableColumn>= [
     { label: "Nome", property: "name"},
     { label: "Endereço", property: "address"},
     { label: "Telefone", property: "cellphone"}
   ];

  actions: Array<PoTableAction> = [
       {icon: "an an-pencil-simple",label: "Editar"},
       {icon: "an an-trash",label: "Excluir"}
  ]

    items = [
    { name: "Thiago Fofano", address: "Avenida são camilo", cellphone: "(11)94202-0799"}
  ]

  constructor() { }

  ngOnInit() { }

  cancel() {
    // cancel action here
  }

  save() {
    // save action here
  }

  saveNew() {
    // saveNew action here
  }

}
