// navigation post

import { createStackNavigator } from 'react-navigation-stack';
import { defaultOpts } from './common';
import { trans } from '../helper';
import HomePage from "../pages/Home/HomePage";
import PostPage from "../pages/Post/PostPage";


export default createStackNavigator(
    {
        Post: {
            screen: PostPage,
            navigationOptions: {
                headerShown: false
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


