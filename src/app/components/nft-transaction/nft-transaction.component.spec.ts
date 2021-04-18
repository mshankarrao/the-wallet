import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftTransactionComponent } from './nft-transaction.component';

describe('NftTransactionComponent', () => {
  let component: NftTransactionComponent;
  let fixture: ComponentFixture<NftTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
