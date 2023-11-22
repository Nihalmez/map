import { Component,Input, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
@Input() marker: any;
  constructor() {}


  ngOnInit() {
  }

}
