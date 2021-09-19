import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FarmEasyService } from '../farm-easy.service';

@Component({
  selector: 'app-bidder-forgot-pass',
  templateUrl: './bidder-forgot-pass.component.html',
  styleUrls: ['./bidder-forgot-pass.component.css']
})
export class BidderForgotPassComponent implements OnInit {
  bidderEmail: any;
  password: any;
  

  constructor(private farmEasyService: FarmEasyService) { }
  ngOnInit(): void {
  }

  onSubmit(f: NgForm)
  {
     console.log(f.value) ;
     
      // this.farmEasyService.mail(this.email).subscribe();
      this.farmEasyService.modifyBidderPassword(f.value).subscribe(data => console.log(data));
      alert('Password Updated!!')
    }
  }