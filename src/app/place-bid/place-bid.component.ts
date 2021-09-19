import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FarmEasyService } from '../farm-easy.service';

@Component({
  selector: 'app-place-bid',
  templateUrl: './place-bid.component.html',
  styleUrls: ['./place-bid.component.css']
})
export class PlaceBidComponent implements OnInit {

  constructor(private farmEasyServ:FarmEasyService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm)
  {
     console.log(f.value) ;
      // this.farmEasyService.mail(this.email).subscribe();
      this.farmEasyServ.modifyBidderAmt(f.value).subscribe(data => console.log(data));
      alert("Bid Successful..!!")
    }

}
