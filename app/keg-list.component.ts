import { Component, Input,Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `

  <select (change)="onChange($event.target.value)">
    <option value = "allbeers"> All Beers</option>
    <option value = "cheap">Beers 9$ or Less</option>
    <option value = "expensive">Beers 10$ or more</option>
  </select>

  <ul>

  <li *ngFor="let currentItem of childKegList | price:filterByPrice">
  Name: {{currentItem.name}} | Brand: {{currentItem.brand}} |
  <!--here is some comment-->
                <span *ngIf="currentItem.price <= 5" style="color:blue;">Price: $ {{currentItem.price}}</span>
                <span *ngIf="currentItem.price > 5">Price: $ {{currentItem.price}}</span>
   | Alcohol Content: {{currentItem.alcoholContent}}<span *ngIf="currentItem.alcoholContent > 5">(Strong Beer)</span> | Pints: {{currentItem.pints}} <span *ngIf="currentItem.pints < 10">ALERT!!!</span><button (click)="editKegClicked(currentItem)">Edit!</button><button (click)="updateKegPints(currentItem)">sell!</button>

  </li>

  </ul>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  @Output() sellSender = new EventEmitter();
  filterByPrice: string = "allbeers";

  editKegClicked(kegEdit: Keg){
    this.clickSender.emit(kegEdit);
  }

  updateKegPints(kegSell: Keg){
    this.sellSender.emit(kegSell);
  }

  onChange(optionFromMenu) {
    this.filterByPrice = optionFromMenu;
  }

}
