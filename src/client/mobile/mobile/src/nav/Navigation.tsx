// Navigation

import React from 'react';
import {Icon, Button, Text, Root} from "native-base";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createSwitchNavigator } from "react-navigation";
import { trans } from '../helper';
import HomePage from '../pages/HomePage';
import { defaultOpts } from './common'
import HomeDrawerStructure from "../pages/Home/HomeDrawerStructure";
import ChatPage from "../pages/ChatPage";
import PostPage from "../pages/PostPage";
import ProfilePage from "../pages/ProfilePage";
import FavoritePage from "../pages/FavoritePage";
import NavBottomTabIcon from "./NavBottomTabIcon";
import NavigationHome from "./NavigationHome";
import NavigationFavorite from "./NavigationFavorite";
import NavigationPost from "./NavigationPost";
import NavigationChat from "./NavigationChat";
import NavigationProfile from "./NavigationProfile";

const RootStack = createBottomTabNavigator(
    {
      Home: NavigationHome,
      Favorite: NavigationFavorite,
      Post: NavigationPost,
      Chat: NavigationChat,
      Profile: NavigationProfile
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            //create button icons
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const { routeName } = navigation.state;
                return (
                    <NavBottomTabIcon
                        tintColor={tintColor}
                        routeName={routeName as any}
                        screenProps={(navigation as any).getScreenProps()}
                />);
            },
            //do localize of title pages
            title: trans('title_'+navigation.state.routeName.toLocaleLowerCase()),
        }),
        tabBarOptions: {
            activeTintColor: 'red',
            inactiveBackgroundColor: 'light-yellow'
        }
    }
);

const rootNav = createStackNavigator({
        BottomTabNav : {screen: RootStack}
    },
    {
        initialRouteName: 'BottomTabNav',
        headerMode: 'none',
        mode: 'modal',
    }
);

export default  createAppContainer(rootNav)
// export default createAppContainer(appSwitchNavigator);


