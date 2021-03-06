import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/storage';
import { IonSlides } from '@ionic/angular';
import { INTRO_KEY } from 'src/app/guards/intro.guard';
 
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild(IonSlides) slides: IonSlides;
  constructor(private router:Router){}
next(){
  this.slides.slideNext();
}
async start(){
  await Storage.set({key: INTRO_KEY, value: 'true'});
  this.router.navigateByUrl('/login',{replaceUrl:true} );
}
}