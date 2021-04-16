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
  result: any =[];
  k =[1,2,3,4,5,6,7];

  constructor(private accountService: AccountService) {

  }

  ngOnInit() {
    this.accountService.getNFTDetails().subscribe((val: any) => {
      this.items = val.data.items;
      var zaffa: any[] = [];
      for (var item of this.items) {
        if (item.nft_data != null) {
          zaffa = this.result.concat(item.nft_data);
        }
      }
      this.nfts = zaffa;
      console.log("Result",this.nfts[0].external_data.image)
    })

  }





}
