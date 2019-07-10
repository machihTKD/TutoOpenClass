import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';
import { resolve, reject } from 'q';
import { AppareilService } from '../Services/appareil.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  isAuth = false;

  //Promise pour une donnée asynchrone utilisé dans le Pipe
  lastUpdate = new Promise (
    (resolve, reject)=> {
      const date = new Date();
      setTimeout(
        ()=> {
          resolve(date);
        }, 2000
      );
    }
  )

    appareils: any[];
    appareilSubscription:Subscription
  
  constructor (private appareilService : AppareilService) {
    setTimeout(
      () => {
        this.isAuth=true;
      }, 4000
    );
  }
  ngOnInit() {
    this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
      (appareils:any[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
  }

  //Méthode pour le btn allumé 
  onAllumer(){
    this.appareilService.switchOnAll();
  }
  onEteindre(){
    this.appareilService.switchOffAll();
  }
  onSave() {
    this.appareilService.saveAppareilstoServer();
  }

  onFetch() {
    this.appareilService.getAppareilsFromServer();
}
}
