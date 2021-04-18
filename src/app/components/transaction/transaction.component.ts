import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AccountService } from 'src/app/services/account/account.service';


@Component({
    selector: 'app-transaction',
    templateUrl: './transaction.component.html',
    styleUrls: ['./transaction.component.scss'],
    animations: [
        trigger('detailExpand', [
            state('collapsed', style({ height: '0px', minHeight: '0' })),
            state('expanded', style({ height: '*' })),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
    ],
})
export class TransactionComponent {
    ELEMENT_DATA: PeriodicElement[] | undefined;
    dataSource: any;

    constructor(private accountService: AccountService) {

    }

    columnsToDisplay = ['from_address', 'to_address', 'tx_hash', 'block_signed_at'];
    expandedElement: PeriodicElement | undefined;

    ngOnInit(): void {
        this.accountService.getTransactionDetails().subscribe((val: any) => {
            this.ELEMENT_DATA = val.data.items;
            this.dataSource = this.ELEMENT_DATA;
        })

    }

}

export interface PeriodicElement {
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
