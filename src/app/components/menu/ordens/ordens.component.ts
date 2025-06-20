import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoPageModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-ordens',
  imports: [
    CommonModule,
    PoPageModule,
  ],
  templateUrl: './ordens.component.html',
  styleUrls: ['./ordens.component.css']
})
export class OrdensComponent implements OnInit {

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
