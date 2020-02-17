// actions/settings

import {
  LANG_CHANGE,
  BOTTOM_NAV_BADGE_CHANGE,
} from '../constants';
import { BottomNavType } from '../types';

export function changeLangAction(lan: string) {
  return {
    type: LANG_CHANGE,
    payload: lan,
  }
}

export function changeBottomNavBadgeAction(type: BottomNavType, badge: number) {
  return {
    type: BOTTOM_NAV_BADGE_CHANGE,
    payload: { type, badge },
  }
}



