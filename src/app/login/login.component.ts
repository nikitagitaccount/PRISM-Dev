import { Component, OnInit } from '@angular/core';
import { InputModule } from 'carbon-components-angular/input';
import { on } from 'events';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }
  nagivateUrl() {
    window.location.href= 'http://localhost:4200/'+'home';

  }
}
