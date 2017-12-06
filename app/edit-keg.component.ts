import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
  <div *ngIf="childSelectedKeg">
  <h3>{{childSelectedKeg.name}}</h3>
  <h3>{{childSelectedKeg.brand}}</h3>
  <h3>{{childSelectedKeg.price}}</h3>
  <h3>{{childSelectedKeg.alcoholContent}}</h3>
  <h3>Edit Keg</h3>
  Edit Name:
  <input type="text" #name><br>
  Edit Brand:
  <input type="text" #brand><br>
  Edit Price:
  <input type="text" #price><br>
  Edit Alcohol Content:
  <input type="text" #alcoholContent><br>

  <button (click) = "doneButtonClicked(name.value, brand.value, price.value, alcoholContent.value)">Done</button>
</div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked(name: string, brand: string, price: number, alcoholContent: number) {
    var result = [name, brand, price, alcoholContent];
    this.doneButtonClickedSender.emit(result);
  }
}
