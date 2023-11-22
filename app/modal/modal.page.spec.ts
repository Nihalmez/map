import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ModalPage } from './modal.page';

describe('ModalPage', () => {
  let component: ModalPage;
  let fixture: ComponentFixture<ModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalPage],
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(ModalPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
