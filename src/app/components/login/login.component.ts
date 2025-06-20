import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoPageLoginModule } from '@po-ui/ng-templates';
import { Router} from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    PoPageLoginModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  login() {
    this.router.navigate(['/clientes']);
  }

}
