import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FarmEasyService } from '../farm-easy.service';

@Component({
  selector: 'app-farmer-forgot-pass',
  templateUrl: './farmer-forgot-pass.component.html',
  styleUrls: ['./farmer-forgot-pass.component.css']
})
export class FarmerForgotPassComponent implements OnInit {

  farmerEmail: any;
  password: any;
  

  constructor(private farmEasyService: FarmEasyService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm)
  {
     console.log(f.value) ;
     
      // this.farmEasyService.mail(this.email).subscribe();
      this.farmEasyService.modifyFarmerPassword(f.value).subscribe(data => console.log(data));
      alert('Password Updated!!')
    }
  }
