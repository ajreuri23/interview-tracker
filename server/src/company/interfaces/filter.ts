export enum FilterType {
  Range,
  CloseList,
  Term
}

export class Filter {
  constructor(private type: FilterType) {
  }
}

export class RangeFilter extends Filter {
  constructor(private min: number, private max: number) {
    super(FilterType.Range);
  }
}

export class CloseListFilter extends Filter {
  constructor(private options: string[]) {
    super(FilterType.CloseList);
  }
}

export class TermFilter extends Filter {
  constructor(private searchTerm: string) {
    super(FilterType.Term);
  }
}
