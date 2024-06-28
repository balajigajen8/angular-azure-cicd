import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
[x: string]: any;
store: any;
name = 'BALAJI';
titleParts = [
  { text: 'MADE', colorClass: 'indian-product-saffron' },
  { text: 'IN', colorClass: 'indian-product-white' },
  { text: 'INDIA', colorClass: 'indian-product-green' }
];
}