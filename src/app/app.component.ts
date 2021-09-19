import { Component } from '@angular/core';
import { FarmEasyService } from './farm-easy.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FarmEasy';
  constructor(private farmEasyService: FarmEasyService, private myhttp: HttpClient) {}
}
