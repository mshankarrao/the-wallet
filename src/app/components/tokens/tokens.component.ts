import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-tokens',
  templateUrl: './tokens.component.html',
  styleUrls: ['./tokens.component.scss']
})
export class TokensComponent implements OnInit {
  ELEMENT_DATA: TokenElement[] | undefined;
  dataSource: any;

  constructor(private accountService: AccountService) { }
  
  columnsToDisplay = ['contract_name', 'contract_ticker_symbol', 'balance'];
  expandedElement: TokenElement | undefined;



  ngOnInit() {
    this.accountService.getTokens().subscribe((val: any) => {
      this.ELEMENT_DATA = val.data.items;
      this.dataSource = this.ELEMENT_DATA;
    })
  }

  getExactBalance(value:number)
  {
    return value / Math.pow(10,18)
  }

}


export interface TokenElement {
  contract_name: string;
  contract_ticker_symbol: string;
  balance: string;
}
