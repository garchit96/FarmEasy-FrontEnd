import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CropDetail } from 'src/CropDetail';
import { FarmEasyService } from '../farm-easy.service';

@Component({
  selector: 'app-sell-request',
  templateUrl: './sell-request.component.html',
  styleUrls: ['./sell-request.component.css']
})
export class SellRequestComponent implements OnInit {
 
 dCrop = [
    {
      cropType: 'Rabi',
      cropName: ['Barley', 'Wheat', 'Gram', 'Mustard', 'Pulses']
    },
    {
      cropType: 'Kharif',
      cropName: ['Rice', 'Corn', 'Cotton', 'Jowar']
    },
    { 
      cropType: 'Horticulture',
      cropName: ['Flower', 'Fruit', 'Vegetable']
    }
  ];
  cropNames = [];
  constructor(private farmEasyService: FarmEasyService) { }

  ngOnInit(): void {
    this.cropNames=this.dCrop[0].cropName
  }

  onSubmit(f: NgForm)
  {
     console.log(f.value) ;
      // this.farmEasyService.mail(this.email).subscribe();
       f.value.farmerDetail.farmerEmail=sessionStorage.getItem('femail');
       f.value.sellReqStatus="Pending";
      this.farmEasyService.addNewSellRequest(f.value).subscribe(data => console.log(data));
      alert("Sell Request Placed Successfully..!!")
    }

    selectCropType(evt){
      let cropType = this.dCrop.find(t => t.cropType === evt);
      console.log("called", evt, cropType.cropName);
      this.cropNames =  cropType.cropName;
    }
    selectedCropName(name){

    }
  }
