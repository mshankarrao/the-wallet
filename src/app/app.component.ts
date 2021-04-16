import { Component } from '@angular/core';
import { SharedService } from './services/shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  address: any;
  title = 'the-wallet';

  constructor(private sharedService: SharedService) {
  }

  ngOnInit(): void {
    this.sharedService.currentMessage.subscribe(address => (this.address = address));
  }

}
