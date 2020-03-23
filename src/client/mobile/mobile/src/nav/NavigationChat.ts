// navigation post

import { createStackNavigator } from 'react-navigation-stack';
import { defaultOpts } from './common';
import { trans } from '../helper';
import PostPage from "../pages/PostPage";



export default createStackNavigator(
    {
        Post: {
            screen: PostPage,
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


