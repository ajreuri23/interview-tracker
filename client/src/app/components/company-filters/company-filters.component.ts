import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Filter, OnDeleteFilterEvent, OnFilterEvent} from "../../interfaces";

@Component({
  selector: 'app-company-filters',
  templateUrl: './company-filters.component.html',
  styleUrls: ['./company-filters.component.scss']
})
export class CompanyFiltersComponent implements OnInit {
  @Input() filters: Array<[string, Filter]>;
  @Output() onNewFilter = new EventEmitter<Map<string, (obj: any) => boolean>>();
  private currentFilters: Map<string, (obj: any) => boolean> = new Map<string, (obj: any) => boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onFilter(onFilterEvent: OnFilterEvent) {
    this.currentFilters.set(onFilterEvent.key, onFilterEvent.filterFunction);
    this.onNewFilter.emit(this.currentFilters);
  }

  onDeleteFilter(onDeleteFilterEvent: OnDeleteFilterEvent) {
    this.currentFilters.delete(onDeleteFilterEvent.key)
    this.onNewFilter.emit(this.currentFilters);
  }
}
