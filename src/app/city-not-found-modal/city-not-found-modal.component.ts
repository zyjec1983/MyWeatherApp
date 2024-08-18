/*import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-city-not-found-modal',
  templateUrl: './city-not-found-modal.component.html',
  styleUrls: ['./city-not-found-modal.component.scss'],
})
export class CityNotFoundModalComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
*/


import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-city-not-found-modal', 
  templateUrl: './city-not-found-modal.component.html',
  styleUrls: ['./city-not-found-modal.component.scss']
})
export class CityNotFoundModalComponent {

  constructor(private modalCtrl: ModalController) {}

  dismiss() {
    this.modalCtrl.dismiss();
  }
}