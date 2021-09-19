import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { BidderLogin } from 'src/BidderLogin';
import { FarmEasyService } from '../farm-easy.service';

@Component({
  selector: 'app-bidder-login',
  templateUrl: './bidder-login.component.html',
  styleUrls: ['./bidder-login.component.css']
})
export class BidderLoginComponent implements OnInit {

  email:any;
  password:any;
  message:any;

  constructor(private fserve: FarmEasyService, private router: Router) { }

  onSubmit(f: NgForm)
  {
    var bidderlog = new BidderLogin();
    bidderlog.bidderEmail = this.email;
    bidderlog.password = this.password;
    this.fserve.bidderLogin(bidderlog).subscribe(
      user=>{
        //alert(JSON.stringify(user))

        if(user)
        {
          // let farmerName = user.name;
          // let farmerEmail = user.email;
          // sessionStorage.setItem('FarmerName', farmerName);
          // sessionStorage.setItem('FarmerEmail', farmerEmail);
          console.log('Success');
          alert('Login Successful..')
          this.router.navigate(['bidderDashboard']);
          sessionStorage.setItem('bemail',bidderlog.bidderEmail );
          
        }
        else
        {
          alert('Wrong Credentials... Try again');
          // this.message=user.message
          // alert(this.message)
          console.log('errors');
        }
      }
    )
  }

  ngOnInit(): void {
  }

}
