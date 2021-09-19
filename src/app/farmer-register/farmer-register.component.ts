import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FarmEasyService } from '../farm-easy.service';


@Component({
  selector: 'app-farmer-register',
  templateUrl: './farmer-register.component.html',
  styleUrls: ['./farmer-register.component.css']
})
export class FarmerRegisterComponent implements OnInit {

  farmerEmail: any;
  pass: any;
  pass2: any;

  constructor(private farmEasyService: FarmEasyService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm)
  {
     console.log(f.value) ;
      // this.farmEasyService.mail(this.email).subscribe();
      this.farmEasyService.addNewFarmer(f.value).subscribe(data => console.log(data));
      alert("Registration Successful..!!")
    }
  }

