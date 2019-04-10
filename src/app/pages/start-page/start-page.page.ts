import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.page.html',
  styleUrls: ['./start-page.page.scss'],
})
export class StartPagePage implements OnInit {
  slideBtnActive: boolean;
  slideBtnInstructions: string;

  constructor() { }

  ngOnInit() {
    this.slideBtnActive = false;
    this.slideBtnInstructions = 'Presione para activar';
  }

  activateSlideBtn() {
    this.slideBtnActive = true;
    this.slideBtnInstructions = 'Ya sabes que hacer';
  }
  slideReady(evt) {
    console.log(evt);   
    const self: any = this;
    const btn: HTMLElement = evt.detail.target;
    this.slideBtnActive = false;
    setTimeout(() => { 
      btn.style.transform = 'translateX(0px)';
      self.ngOnInit();
    }, 3500);   
    
  }



}
