import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoModule, PoPageModule, PoTableColumn } from '@po-ui/ng-components';

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

  columns = [
     { label: 'Nome' },
     { label: 'Endereço' },
     { label: 'Telefone'}
   ];

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
