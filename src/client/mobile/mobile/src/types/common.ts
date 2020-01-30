// types/common

import { NavigationScreenProp, NavigationRoute, NavigationParams } from "react-navigation";

export interface NavProps {
  navigation: NavigationScreenProp<NavigationRoute<NavigationParams>, NavigationParams>;
}

export interface PageProps extends NavProps {

}

export type BottomNavType = 'Home' | 'News' | 'Personal' | 'Connect';

export type TopNavType = 'News' | 'EmergencyNews';