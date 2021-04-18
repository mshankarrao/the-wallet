import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { HeaderComponent } from './components/header/header.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { NftComponent } from './components/nft/nft.component';
import { HttpClientModule } from '@angular/common/http';
import { SplashComponent } from './components/splash/splash.component';
import { TokensComponent } from './components/tokens/tokens.component';
import { NftTransactionComponent } from './components/nft-transaction/nft-transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    TransactionComponent,
    NftComponent,
    SplashComponent,
    TokensComponent,
    NftTransactionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
