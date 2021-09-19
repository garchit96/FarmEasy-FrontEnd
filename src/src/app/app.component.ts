import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contacts';
  constructor(private myhttp:HttpClient)
  {

  }

  ngOnInit()

  {
    this.myhttp.get('http://localhost:8080/ContactApp/rest/Contactservice/allcontacts').subscribe((dataFromNet)=>this.displayData(dataFromNet));
  }
thisPageGlobalData;
displayData(dataFromNet)
{
  this.thisPageGlobalData=dataFromNet

}
} 
