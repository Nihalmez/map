import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Terrain2Page } from './terrain2.page';

describe('Terrain2Page', () => {
  let component: Terrain2Page;
  let fixture: ComponentFixture<Terrain2Page>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(Terrain2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
