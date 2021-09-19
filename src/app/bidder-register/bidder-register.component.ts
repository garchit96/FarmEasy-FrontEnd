import { Component, OnInit } from '@angular/core';
import { FarmEasyService } from '../farm-easy.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-bidder-register',
  templateUrl: './bidder-register.component.html',
  styleUrls: ['./bidder-register.component.css']
})
export class BidderRegisterComponent implements OnInit {

  bidderEmail: any;
  pass: any;
  pass2: any;

  constructor(private farmEasyService: FarmEasyService) { }

  ngOnInit(): void {
  }
 
  onSubmit(f: NgForm)
  {
     console.log(f.value) ;
      // this.farmEasyService.mail(this.email).subscribe();
      this.farmEasyService.addNewBidder(f.value).subscribe(data => console.log(data));
      alert("Registration Successful..!!")
    }

}
