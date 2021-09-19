import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FarmerRegisterComponent } from './farmer-register/farmer-register.component';
import { BidderRegisterComponent } from './bidder-register/bidder-register.component';
import { FarmerDetailsComponent } from './farmer-details/farmer-details.component';
import { FarmEasyService } from './farm-easy.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FarmerLoginComponent } from './farmer-login/farmer-login.component';
import { BidderLoginComponent } from './bidder-login/bidder-login.component';
import { SellRequestComponent } from './sell-request/sell-request.component';
import { ViewSoldHistoryComponent } from './view-sold-history/view-sold-history.component';
import { FarmerDashboardComponent } from './farmer-dashboard/farmer-dashboard.component';
import { BidderDashboardComponent } from './bidder-dashboard/bidder-dashboard.component';
import { InsuranceDashboardComponent } from './insurance-dashboard/insurance-dashboard.component';
import { FooterComponent } from './footer/footer.component';

import { FarmerForgotPassComponent } from './farmer-forgot-pass/farmer-forgot-pass.component';
import { BidderForgotPassComponent } from './bidder-forgot-pass/bidder-forgot-pass.component';
import { BidsForBidderComponent } from './bids-for-bidder/bids-for-bidder.component';
import { InsuranceApplicationComponent } from './insurance-application/insurance-application.component';
import { ViewMarketPlaceComponent } from './view-market-place/view-market-place.component';
import { PlaceBidComponent } from './place-bid/place-bid.component';

@NgModule({
  declarations: [
    AppComponent,
    FarmerLoginComponent,
    FarmerRegisterComponent,
    BidderRegisterComponent,
    FarmerDetailsComponent,
    WelcomeComponent,
    AboutComponent,
    HomeComponent,
    ContactUsComponent,
    BidderLoginComponent,
    SellRequestComponent,
    ViewSoldHistoryComponent,
    FarmerDashboardComponent,
    BidderDashboardComponent,
    InsuranceDashboardComponent,
    FooterComponent,
    
    FarmerForgotPassComponent,
    BidderForgotPassComponent,
    BidsForBidderComponent,
    InsuranceApplicationComponent,
    ViewMarketPlaceComponent,
    PlaceBidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  
  
  ],
  providers: [FarmEasyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
