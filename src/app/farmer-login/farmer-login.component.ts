import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { Farmerlogin } from 'src/Farmerlogin';
import { FarmEasyService } from '../farm-easy.service';

@Component({
  selector: 'app-farmer-login',
  templateUrl: './farmer-login.component.html',
  styleUrls: ['./farmer-login.component.css']
})
export class FarmerLoginComponent implements OnInit {
  email:any;
  password:any;
  message:any;

  constructor(private fserve: FarmEasyService, private router: Router) { }

  onSubmit(f: NgForm)
  {
    var farmlog = new Farmerlogin();
    farmlog.farmerEmail = this.email;
    farmlog.password = this.password;
    this.fserve.farmerLogin(farmlog).subscribe(
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
          this.router.navigate(['farmerDashboard']);
          sessionStorage.setItem('femail',farmlog.farmerEmail );
          
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
