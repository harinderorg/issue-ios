import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import { NotiService } from '../services/noti/noti.service';
import { ApiService } from '../services/api/api.service';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage implements OnInit {
  response:any;
  items:any;
  constructor(
    private router:Router,
    public notifi:NotiService,
    public apiservice:ApiService,
    private sanitizer: DomSanitizer

  ) {
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
  this.apiservice.postdata('events','','').subscribe(data =>{
  
  this.response=data;          
  console.log(data);
if(this.response.status == 1){  
this.notifi.stopLoading(); 
this.items= this.response.data;

}else if( this.response.status == 0){
this.notifi.stopLoading(); 
this.notifi.presentToast(this.response.msg,'danger');
}

}, (err) => {
this.notifi.stopLoading(); 
console.log(err)
});
}

}
