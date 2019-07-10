import { Component, OnInit, OnDestroy } from '@angular/core';
import  { Observable, interval, Subscription} from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  secondes: number;
  counterSubscription: Subscription;

constructor() {}

ngOnInit() {
  //afficher le nombre de secondes depuis le début de la connexion
  //début
  const counter = interval(1000);
  this.counterSubscription = counter.subscribe(
    (value:number) => {
      this.secondes = value;
    }
  );
  //fin pour counter
}
ngOnDestroy() {
  this.counterSubscription.unsubscribe();
}
}

