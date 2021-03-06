import { FCM } from '@ionic-native/fcm/ngx';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ApiService } from './services/api/api.service';
import { NotiService } from './services/noti/noti.service';
import { AES256 } from '@ionic-native/aes-256/ngx';
import { Component, OnInit, ViewChild } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  
  fcm_token:any;
  response:any;
  secureKey:any;
  errors:any = ['',null,undefined];

  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Ministerio Jesucristo Vive',
      url: '/',
      icon: 'person-sharp'
    },
    {
      title: 'Libro',
      url: '/libro',
      icon: 'book'
    },
    {
      title: 'Fragmentos',
      url: '/fragmentos',
      icon: 'play-circle-outline'
    },
    {
      title: 'Palabras de vida',
      url: '/palabras',
      icon: 'play-circle-outline'
    },
    {
      title: 'Eventos',
      url: '/event',
      icon: 'calendar'
    },
    {
      title: 'Biografía',
      url: '/bio',
      icon: 'leaf'
    },
    {
      title: 'Fundación',
      url: '/',
      icon: 'heart'
    },
    {
      title: 'Acerca de Nosotros',
      url: '/',
      icon: 'leaf',
      link:'http://www.jesucristovive.com/es/conocenos/pastora-monica-jaquez.html'
    },
    {
      title: 'Chat',
      url: '/chat',
      icon: 'chatbox-ellipses-sharp'
    },
    {
      title: 'Contáctenos',
      url: '/contact',
      icon: 'location-sharp'
    },
    {
      title: 'Facebook',
      url: '',
      icon: 'logo-facebook',
      link:'https://www.facebook.com/jesucristoviveministerio'
    },
    {
      title: 'Instagram',
      url: '/',
      icon: 'logo-instagram',
      link:'https://www.instagram.com/monicajaquez/'
    },
    {
      title: 'Twitter',
      url: '/',
      icon: 'logo-twitter',
      link:'https://twitter.com/MJesucristoVive'
    },
    {
      title: 'Youtube',
      url: '/',
      icon: 'logo-youtube',
      link:'https://www.youtube.com/user/MinJesucristoVive'
    },
    {
      title: 'Donaciones',
      url: '/',
      icon: 'heart'
    },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private fcm: FCM,
    private router: Router,
    public apiservice:ApiService,
    public notifi:NotiService,
    private aes256: AES256,
    private iab: InAppBrowser
  ) {
    this.initializeApp();
  }


  ngOnInit() {
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.backgroundColorByHexString('#1e6075');
      this.splashScreen.hide(); 
      this.fcm.getToken().then(token => {
        this.fcm_token = token;
        localStorage.setItem('uuid',this.fcm_token);
        console.log(this.fcm_token);
        this.savetoken(this.fcm_token);
      });
      this.fcm.onNotification().subscribe(data => {
        console.log(data);
        if (data.wasTapped) {
          console.log('Received in background');
          this.router.navigate([data.landing_page, data.price]);
        } else {
          console.log('Received in foreground');
          this.router.navigate([data.landing_page, data.price]);
        }   
      });

    
    });

    }

  savetoken(i){   
    this.apiservice.postdata('updatetokens', {token:i},'').subscribe(data =>{ 
    console.log(data);
    this.response=data;
    this.notifi.stopLoading();     
    console.log(data);
  if(this.response.status == 1){  
      }else{
  this.notifi.presentToast('Please connect to network and restart the app','danger');
   }

}, (err) => {
  console.log(err)
});

 }

 link(l){
   if(this.errors.indexOf(l.link)==-1){
    console.log('first')
    const browser = this.iab.create(l.link);
   }
   else{
    console.log('sec')
    this.router.navigate([l.url]);
   }
 }



}
