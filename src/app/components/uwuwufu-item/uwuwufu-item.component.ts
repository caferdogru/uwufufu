import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UwuwufuItem } from 'src/app/models/uwuwufu-item.model';

@Component({
  selector: 'app-uwuwufu-item',
  templateUrl: './uwuwufu-item.component.html',
  styleUrls: ['./uwuwufu-item.component.css']
})
export class UwuwufuItemComponent {

  @Input() uwuwufuItem: UwuwufuItem;
  @Input() index: number;
  @Output() onChoiceSelected: EventEmitter<UwuwufuItem> = new EventEmitter();

  onImageClick() {
    this.onChoiceSelected.emit(this.uwuwufuItem);
  }

  decideClass() {
    if(this.index === 1) {
      return 'first-item'
    }
    return 'second-item'
  }

}
