import { Component, OnInit } from '@angular/core';
import { ContractService } from 'src/app/services/contract/contract.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  address: any;

  constructor(private contractService: ContractService, private sharedService: SharedService, private localStorage: LocalstorageService) {
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (localStorage.getItem("address")) {
      this.address = localStorage.getItem("address");
      this.sharedService.changeMessage(this.address);
    }
  }

  async connectMetamask() {
    this.address = await this.contractService.connectAccount().then((a) => {
      return a;
    });
    this.sharedService.changeMessage(this.address);
    this.localStorage.setItem("address", this.address);
  }

}
