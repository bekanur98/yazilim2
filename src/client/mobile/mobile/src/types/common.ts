// types/common

import { NavigationScreenProp, NavigationRoute, NavigationParams } from "react-navigation";

export interface NavProps {
  navigation: NavigationScreenProp<NavigationRoute<NavigationParams>, NavigationParams>;
}

export interface PageProps extends NavProps {

}

export interface IAuthor {
  id: number;
  name: string;
}

export interface IDepartment{
  faculty:{
    id: number;
  }
}

export interface IComment{
  id: number;
}

export interface IImage {
  url: string;
}

export interface IPoster{
  id: number;
  title: string;
  descripttion: string;
  publishedAt: string;
  author: IAuthor;
  department?: IDepartment;
  comments: IComment[];
  cost?: number;
  rating: number;
  images?: IImage[];
}

export type BottomNavType = 'Home' | 'Favorite' | 'Post' | 'Chat' | 'Profile';

export type TopNavType = 'News' | 'EmergencyNews';
