export enum FilterType {
  Range,
  CloseList,
  Term
}

export class Filter {
  constructor(private type: FilterType, private name: string) {
  }
}

export class RangeFilter extends Filter {
  constructor(private min: number, private max: number, name: string) {
    super(FilterType.Range, name);
  }
}

export class CloseListFilter extends Filter {
  constructor(private options: string[], name: string) {
    super(FilterType.CloseList, name);
  }
}

export class TermFilter extends Filter {
  constructor(private searchTerm: string, name: string) {
    super(FilterType.Term, name);
  }
}
