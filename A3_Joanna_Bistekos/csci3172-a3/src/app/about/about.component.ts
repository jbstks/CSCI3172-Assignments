import { Component, OnInit } from '@angular/core';
import { faApple } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  faApple = faApple;

  constructor() { }

  ngOnInit() {
  }

}
