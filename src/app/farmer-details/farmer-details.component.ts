import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FarmerDetail } from 'src/FarmerDetail';
import { FarmEasyService } from '../farm-easy.service';

@Component({
  selector: 'app-farmer-details',
  templateUrl: './farmer-details.component.html',
  styleUrls: ['./farmer-details.component.css']
})
export class FarmerDetailsComponent implements OnInit {

  farmerEmail: string;
  farmerDetail: FarmerDetail[];
  tempFarmerDetail: FarmerDetail[];
  farmObj: FarmerDetail;
  private subscription: Subscription;

  constructor(private farmEasyService: FarmEasyService) { }

  ngOnInit() {
    this.subscription=this.farmEasyService.findAllFarmers().subscribe((data:FarmerDetail[])=>{this.farmerDetail=data;
    // console.log(data);
      this.tempFarmerDetail=data;
    console.log(this.farmerDetail)},
    (err)=>{console.log(err);
    })
  }

  }


  

