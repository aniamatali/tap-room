import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Tap Room</h1>
      <new-keg [childNewKeg]="masterKegs" (newSender)="appendNewItems($event)"></new-keg>

      <keg-list [childKegList]="masterKegs" (clickSender)="editKeg($event)" (sellSender)="updateKegPints($event)"></keg-list>
      <edit-keg [childSelectedKeg] = "selectedKeg" (doneButtonClickedSender)="finishedEditing()"></edit-keg>



    </div>
  `
})

export class AppComponent {

    masterKegs: Keg[] = [
      new Keg('Guinness Draught', 'Guinness', 10, 4.2),
      new Keg('Guinness Nitro IPA', 'Guinness', 4, 5.8),
      new Keg('Guinness Extra Stout', 'Guinness', 8, 5.6)
    ];
  selectedKeg = null;

  appendNewItems(newKeg: Keg){
    this.masterKegs.push(newKeg);
  }

  editKeg(clickedKeg) {
   this.selectedKeg = clickedKeg;
}

  finishedEditing(name, brand, price, alcoholContent) {
  this.selectedKeg.name = name;
  this.selectedKeg.brand = brand;
  this.selectedKeg.price = price;
  this.selectedKeg.alcoholContent = alcoholContent;
  this.selectedKeg = null;
}

updateKegPints(currentItem){
  currentItem.pints -= 1;
}

}
