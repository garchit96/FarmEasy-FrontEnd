import { Component, OnInit } from '@angular/core';
import { FarmEasyService } from '../farm-easy.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-insurance-application',
  templateUrl: './insurance-application.component.html',
  styleUrls: ['./insurance-application.component.css']
})
export class InsuranceApplicationComponent implements OnInit {

  constructor(private farmEasyService:FarmEasyService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm)
  {
     console.log(f.value) ;
      // this.farmEasyService.mail(this.email).subscribe();
      this.farmEasyService.addNewInsurance(f.value).subscribe(data => console.log(data));
      alert('Insurance Application submitted');
    }

}
