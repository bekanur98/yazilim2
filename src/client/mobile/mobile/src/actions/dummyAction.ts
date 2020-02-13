// actions/dummy

import { DUMMY_COUNTER_CHANGE, PAGE_COUNTER_CHANGE } from '../constants';

export function changeCountAction(count: number) {
  return {
    type: DUMMY_COUNTER_CHANGE,
    payload: count
  }
}
export function changePageCounter(pageCounter: number) {
  return {
    type: PAGE_COUNTER_CHANGE,
    payload: pageCounter
  }
}



