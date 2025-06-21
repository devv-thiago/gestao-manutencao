import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoModule, PoPageModule, PoTableAction, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'app-servicos',
  imports: [
    CommonModule,
    PoPageModule,
    PoModule,
  ],
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {

  columns: Array<PoTableColumn> = [
    {label: "Nome", property: "name"},
    {label: "Preço unitário", property: "price"}
  ]
    actions: Array<PoTableAction> = [
       {icon: "an an-pencil-simple",label: "Editar"},
       {icon: "an an-trash",label: "Excluir"}
  ]

    items = [
    { name: "Troca de óleo", price: 100}
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
