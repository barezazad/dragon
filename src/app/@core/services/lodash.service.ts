import { Injectable } from '@angular/core';
import {
  countBy, every, filter, find, forEach, isArray, isEmpty, map, orderBy,
  reduce
} from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class LodashService {

  constructor() {
  }

  get forEach(): unknown {
    return forEach;
  }

  get isEmpty(): unknown {
    return isEmpty;
  }

  get isArray(): unknown {
    return isArray;
  }

  get find(): unknown {
    return find;
  }

  get every(): unknown {
    return every;
  }

  get countBy(): unknown {
    return countBy;
  }

  get map(): unknown {
    return map;
  }

  get filter(): unknown {
    return filter;
  }

  get orderBy(): unknown {
    return orderBy;
  }

  get reduce(): unknown {
    return reduce;
  }

}
