import { Injectable } from '@nestjs/common';
import { Filter } from '../../company/interfaces/filter';
import { Schema } from 'mongoose';

@Injectable()
export class FilterMakerService {
  constructor() {}

  public createFilters<T>(schema: Schema, object: T): Filter[] {
    const keys = schema.obj;
    console.log(keys);

    return [];
  }
}
