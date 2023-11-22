import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store2Page } from './store2.page';

describe('Store2Page', () => {
  let component: Store2Page;
  let fixture: ComponentFixture<Store2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Store2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
