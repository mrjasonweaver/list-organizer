import { Component, Input } from '@angular/core';
import { Item } from "../../models/items";
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  @Input() items: Item[];
}
