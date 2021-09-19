import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BidderDashboardComponent } from './bidder-dashboard/bidder-dashboard.component';
import { BidderForgotPassComponent } from './bidder-forgot-pass/bidder-forgot-pass.component';
import { BidderLoginComponent } from './bidder-login/bidder-login.component';
import { BidderRegisterComponent } from './bidder-register/bidder-register.component';
import { BidsForBidderComponent } from './bids-for-bidder/bids-for-bidder.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FarmerDashboardComponent } from './farmer-dashboard/farmer-dashboard.component';
import { FarmerForgotPassComponent } from './farmer-forgot-pass/farmer-forgot-pass.component';
import { FarmerLoginComponent } from './farmer-login/farmer-login.component';
import { FarmerRegisterComponent } from './farmer-register/farmer-register.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { InsuranceApplicationComponent } from './insurance-application/insurance-application.component';
import { InsuranceDashboardComponent } from './insurance-dashboard/insurance-dashboard.component';
import { PlaceBidComponent } from './place-bid/place-bid.component';
import { SellRequestComponent } from './sell-request/sell-request.component';
import { ViewMarketPlaceComponent } from './view-market-place/view-market-place.component';
import { ViewSoldHistoryComponent } from './view-sold-history/view-sold-history.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  { path:'farmerLogin', component: FarmerLoginComponent},
  { path:'bidderLogin', component: BidderLoginComponent},
  { path: 'about', component: AboutComponent},
  { path: 'footer', component:FooterComponent},
  { path: 'home', component: HomeComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'contactUs', component: ContactUsComponent},
  { path: 'farmerRegister', component: FarmerRegisterComponent},
  { path: 'marketPlace', component: ViewMarketPlaceComponent},
  { path: 'farmerForgotPass', component: FarmerForgotPassComponent},
  { path: 'bidderForgotPass', component: BidderForgotPassComponent},
  { path: 'bidderRegister', component: BidderRegisterComponent},
  { path: 'farmerDashboard', component: FarmerDashboardComponent},
  { path: 'bidderDashboard', component:BidderDashboardComponent},
  { path: 'viewSoldHistory', component: ViewSoldHistoryComponent},
  { path: 'placeBid', component: PlaceBidComponent},
  { path: 'sellRequest', component: SellRequestComponent},
  { path: 'currentBids', component: BidsForBidderComponent},
  { path: 'insuranceApplication', component: InsuranceApplicationComponent},
  { path: 'insuranceDashboard', component: InsuranceDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
