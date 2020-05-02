import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import {IOPDetailComponent} from './component_user/iop-detail/iop-detail.component';
import {LoginComponent} from './component_tool/login/login.component';
import {ComparisonsChartsComponent} from './component_user/comparisons-charts/comparisons-charts.component';
import {UpdateProfileComponent} from './component_tool/update-profile/update-profile.component';
import {StockPriceComponent} from './component_user/stock-price/stock-price.component';
import {ImportDataComponent} from './component_admin/import-data/import-data.component';
import {ManageCompanyComponent} from './component_admin/manage-company/manage-company.component';
import {ManageExchangeComponent} from './component_admin/manage-exchange/manage-exchange.component'
import {UpdateIopComponent} from './component_admin/update-iop/update-iop.component'
import { from } from 'rxjs';


const routes: Routes = [
  {
    path:'iop-detail',
    component:IOPDetailComponent
  },
  {
    path:'comparisons-charts',
    component: ComparisonsChartsComponent

  },
  {
    path:'update-profile',
    component: UpdateProfileComponent

  },
  {
    path:'stock-price',
    component: StockPriceComponent

  },
  {
    path:'import-data',
    component:ImportDataComponent
  },
  {
    path:'manage-company',
    component:ManageCompanyComponent
  },
  {
    path:'manage-exchange',
    component:ManageExchangeComponent
  },
  {
    path:'update-iop',
    component:UpdateIopComponent
  },
  {
    path:'login',
    component:LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
