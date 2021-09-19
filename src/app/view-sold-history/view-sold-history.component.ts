import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ViewSoldHistory } from 'src/ViewSoldHistory';
import { FarmEasyService } from '../farm-easy.service';

@Component({
  selector: 'app-view-sold-history',
  templateUrl: './view-sold-history.component.html',
  styleUrls: ['./view-sold-history.component.css']
})
export class ViewSoldHistoryComponent implements OnInit {

  // farmerEmail: string ;

  viewSoldHistory: ViewSoldHistory[]; //will have all the records of the DB< -> Dept table
  tempViewSoldHistory: ViewSoldHistory[];

  private subscription: Subscription;
  constructor(private farmEasyService: FarmEasyService) { }

  ngOnInit(){
    console.log(sessionStorage.getItem('femail'));
    this.subscription = this.farmEasyService.viewSoldHistory(sessionStorage.getItem('femail'))
    .subscribe((data: ViewSoldHistory[]) => { // hold the data of DB into this data array
                    this.viewSoldHistory = data; //copy data array into depts array
                    this.tempViewSoldHistory = data; //copy it to tempDeps array also
                   // console.log(this.tempDepts);
                   console.log("hello");
                    console.log(this.viewSoldHistory);
                }, (err) => {
                    console.log(err);
                });
    }

  }


