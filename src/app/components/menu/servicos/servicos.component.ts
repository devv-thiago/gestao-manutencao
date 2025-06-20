import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoModule, PoPageModule } from '@po-ui/ng-components';

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

  columns = [
    {label: "Nome"},
    {label: "Preço unitário"}
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
