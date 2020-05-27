import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IOPDetailComponent } from './component_user/iop-detail/iop-detail.component';
import { ComparisonsChartsComponent } from './component_user/comparisons-charts/comparisons-charts.component';
import { LoginComponent } from './component_tool/login/login.component';
import { UpdateProfileComponent } from './component_tool/update-profile/update-profile.component';
import { StockPriceComponent } from './component_user/stock-price/stock-price.component';
import { ImportDataComponent } from './component_admin/import-data/import-data.component';
import { ManageCompanyComponent } from './component_admin/manage-company/manage-company.component';
import { ManageExchangeComponent } from './component_admin/manage-exchange/manage-exchange.component';
import { UpdateIopComponent } from './component_admin/update-iop/update-iop.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    IOPDetailComponent,
    ComparisonsChartsComponent,
    LoginComponent,
    UpdateProfileComponent,
    StockPriceComponent,
    ImportDataComponent,
    ManageCompanyComponent,
    ManageExchangeComponent,
    UpdateIopComponent
  ],
  entryComponents:[
    IOPDetailComponent,
    ComparisonsChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
