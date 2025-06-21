import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoModule, PoPageModule, PoTableAction, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'app-ordens',
  imports: [
    CommonModule,
    PoPageModule,
    PoModule,
  ],
  templateUrl: './ordens.component.html',
  styleUrls: ['./ordens.component.css']
})
export class OrdensComponent implements OnInit {
  columns: Array<PoTableColumn> = [
    {label: "Número", property: "number"},
    {label: "Cliente", property: "customer"},
    {label: "Itens", property: "itens"},
    {label: "Status", property: "status"},
  ]
  actions: Array<PoTableAction> = [
    {icon: "an an-eye",label: "Exibir"},
    {icon: "an an-pencil-simple",label: "Editar"},
  ]

  items = [
    { number: 1,customer: 'Thiago',itens: '1',status: "Finalizado",}
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
