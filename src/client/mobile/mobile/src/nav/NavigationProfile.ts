// navigation post

import { createStackNavigator } from 'react-navigation-stack';
import { defaultOpts } from './common';
import { trans } from '../helper';
import HomePage from "../pages/Home/HomePage";
import ProfilePage from "../pages/Profile/ProfilePage";


export default createStackNavigator(
    {
        Profile: {
            screen: ProfilePage,
            navigationOptions: {
                headerShown: false,
            },
        },
    },
    {
        defaultNavigationOptions: {
            ...defaultOpts
        }
        //headerMode: 'none',
    }
);


