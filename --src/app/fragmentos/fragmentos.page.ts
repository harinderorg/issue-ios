import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import { NotiService } from '../services/noti/noti.service';
import { ApiService } from '../services/api/api.service';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
@Component({
  selector: 'app-fragmentos',
  templateUrl: './fragmentos.page.html',
  styleUrls: ['./fragmentos.page.scss'],
})
export class FragmentosPage implements OnInit {
  @ViewChild('slides', {static: false}) slides: IonSlides;
  response:any;
  items:any;
  errors=['',null,undefined];
  slideOpts = {
    slidesPerView:1.15,
    spaceBetween: 0,
    speed: 400,
    zoom: false
  };
  
  constructor(
    private router:Router,
    public notifi:NotiService,
    public apiservice:ApiService,
    private sanitizer: DomSanitizer

  ) { 
    

  }

  ionViewDidEnter(){
    this.vip_training();

  }
ngOnInit() {
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/options']);
  }
  vip_training(){
    this.notifi.presentLoading();     
    this.apiservice.postdata('getshort','','').subscribe(data =>{
    
    this.response=data;          
    console.log(data);
if(this.response.status == 1){  
  this.notifi.stopLoading(); 
  this.items= this.response.data;
  console.log(this.items);
 
}else if( this.response.status == 0){
  this.notifi.stopLoading(); 
 this.notifi.presentToast(this.response.msg,'danger');
}

}, (err) => {
this.notifi.stopLoading(); 
console.log(err)
});
  }

  photoURL(src) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(src);
  }
 
}
