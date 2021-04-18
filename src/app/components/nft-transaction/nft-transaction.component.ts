import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-nft-transaction',
  templateUrl: './nft-transaction.component.html',
  styleUrls: ['./nft-transaction.component.scss']
})
export class NftTransactionComponent implements OnInit {
  nft_metadata: any = [];
  finalData: any = []
  nftHashMap: any;
  nftImageMap: any;
  ELEMENT_DATA: NFTTRANSACTION[] | undefined;
  dataSource: any;
  expandedElement: NFTTRANSACTION | undefined;
  columnsToDisplay = ['from_address', 'to_address', 'tx_hash', 'block_signed_at'];

  constructor(private accountService: AccountService) {
    this.nftHashMap = new Map();
    this.nftImageMap = new Map();
  }

  ngOnInit() {
    this.accountService.getNFTDetails().subscribe(async (val: any) => {
      for (let item of val.data.items) {
        if (item.type == 'nft') {
          this.nft_metadata.push(item);
        }
      }
      console.log("The nft_metadata", this.nft_metadata);
      for (let nft of this.nft_metadata) {
        this.accountService.getNFTIDs(nft).subscribe(async (val: any) => {
          this.nftHashMap.set(nft.contract_address, val.data.items);
          this.nftImageMap.set(nft.contract_address, nft.nft_data[0].token_url);
          console.log("This is nftHashmap", this.nftHashMap);
          console.log("This is nftImageMap", this.nftImageMap);
          this.fillNFTTransactions(val.data.items);
        })
      }

    })

  }

  fillNFTTransactions(values: any) {
    for (let item of values) {
      if (item.contract_address != null && item.token_id != null) {
        this.accountService.getNFTTransaction(item.contract_address, item.token_id).subscribe((val: any) => {
          if (val != null) {
            this.finalData = this.finalData.concat(val.data.items[0].nft_transactions);
          }
          console.log("The final transactions", this.finalData);
          this.dataSource = this.finalData;
        })
   
      }
    }
  }

  getImageURL(contract_address: any) {
    console.log("Hello",this.nftImageMap.get(contract_address));

    return this.nftImageMap.get(contract_address);
  }

}

export interface NFTTRANSACTION {
  block_signed_at: string;
  tx_hash: string;
  tx_offset: number;
  successful: boolean;
  from_address: string;
  from_address_label: any;
  to_address: any;
  to_address_label: any;
  value: string;
  value_quote: number;
  gas_offered: number;
  gas_spent: number;
  gas_price: number;
  gas_quote: number;
  gas_quote_rate: number;
  log_events: any;
}
