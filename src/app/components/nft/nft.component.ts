import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-nft',
  templateUrl: './nft.component.html',
  styleUrls: ['./nft.component.scss']
})
export class NftComponent implements OnInit {
  items: any;
  nfts: any = [];
  result: any = [];

  constructor(private accountService: AccountService) {

  }

  ngOnInit() {
    this.accountService.getNFTDetails().subscribe((val: any) => {
      this.items = val.data.items;
      var final_result: any[] = [];
      for (var item of this.items) {
        if (item.nft_data != null) {
          final_result = this.result.concat(item.nft_data);
        }
      }
      this.nfts = final_result;
    })

  }





}
