import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerPProductComponent } from './seller-p-product.component';

describe('SellerPProductComponent', () => {
  let component: SellerPProductComponent;
  let fixture: ComponentFixture<SellerPProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerPProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerPProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
