import { Component, Input,Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
  <form>
    Name:
    <input type="text" #name><br>
    Brand:
    <input type="text" #brand><br>
    Price:
    <input type="text" #price><br>
    Alcohol Content:
    <input type="text" #alcoholContent><br>
    <button (click) = "NewItems(name.value, brand.value, price.value, alcoholContent.value); name.value='';brand.value='';price.value='';alcoholContent.value='';">Add</button>
  </form>
  `
})

export class NewKegComponent {
  @Input() childNewKeg: Keg[];
  @Output() newSender = new EventEmitter();

  NewItems(name: string, brand: string, price: number, alcoholContent: number){
    this.newSender.emit(new Keg(name, brand, price, alcoholContent));
  }

}
