import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderAppComponent } from './order-app.component';

describe('OrderAppComponent', () => {
  let component: OrderAppComponent;
  let fixture: ComponentFixture<OrderAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderAppComponent]
    });
    fixture = TestBed.createComponent(OrderAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
