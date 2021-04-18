import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private httpClient: HttpClient) {

  }

  getNFTDetails(chainId?: any, address?: any) {
    return this.httpClient.get("https://api.covalenthq.com/v1/43113/address/0xfFe1426e77CE0F7c0945fCC1f4196CD8dC3f090A/balances_v2/?nft=true");
  }

  getTokens(chainId?: any, address?: any) {
    return this.httpClient.get("https://api.covalenthq.com/v1/43113/address/0xfFe1426e77CE0F7c0945fCC1f4196CD8dC3f090A/balances_v2/");
  }

  getTransactionDetails() {
    return this.httpClient.get("https://api.covalenthq.com/v1/43113/address/0xfFe1426e77CE0F7c0945fCC1f4196CD8dC3f090A/transactions_v2/?&key=ckey_876ab80803e44602a7ad845e463")
  }

  getNFTIDs(nft: any, chainId?: any) {
    return this.httpClient.get("https://api.covalenthq.com/v1/43113/tokens/" + nft.contract_address + "/nft_token_ids/?&key=ckey_876ab80803e44602a7ad845e463");
  }


  getNFTTransaction(contract_address: any, token_id: any, chainId?: any) {
    return this.httpClient.get("https://api.covalenthq.com/v1/43113/tokens/" + contract_address + "/nft_transactions/" + token_id + "/?&key=ckey_876ab80803e44602a7ad845e463");
  }




}
