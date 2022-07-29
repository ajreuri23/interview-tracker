import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CloseListFilter, Company, Filter, OnFilterEvent} from 'src/app/interfaces';
import {MatCheckboxChange} from "@angular/material/checkbox";
import { at } from 'lodash';

@Component({
  selector: 'app-close-list-filter',
  templateUrl: './close-list-filter.component.html',
  styleUrls: ['./close-list-filter.component.scss']
})
export class CloseListFilterComponent implements OnInit {
  @Input() filter: [string, Filter];
  @Output() newFilter = new EventEmitter<OnFilterEvent>();
  @Output() onDeleteFilter = new EventEmitter<{ key: string }>();
  public options: string[];
  public currentFilter: boolean[];

  constructor() { }

  ngOnInit(): void {
    this.options = (this.filter[1] as CloseListFilter).options;
    this.currentFilter = new Array<boolean>((this.filter[1] as CloseListFilter).options.length).fill(false);
  }

  setChecked(checked: boolean, index: number): void {
    this.currentFilter[index] = checked;
    if (this.currentFilter.every(filter => !filter)) {
      this.onDeleteFilter.emit({ key: this.filter[0]});
      return;
    }
    const filterFunction = (companyObject: any) => this.options.filter((option, index) => this.currentFilter[index]).includes(at(companyObject, this.filter[0])[0]);
    this.newFilter.emit({key: this.filter[0], filterFunction: filterFunction});
  }
}
