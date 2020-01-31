// Navigation

import React from 'react';
import { Icon, Button, Text } from "native-base";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createSwitchNavigator } from "react-navigation";
import { trans } from '../helper';
import DummyPage from "../pages/DummyPage";
import HomePage from '../pages/HomePage';
import { defaultOpts } from './common'

const HomeStack = createStackNavigator({
    Home: {
      screen:HomePage,
    }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({navigation}) => {
      return {
        headerLeft:()=>(
            <Icon
              type='Entypo'
              name="add-user"
              onPress={() => navigation.openDrawer()}
              fontSize={30}
            />
        ) 
      }
    }
  }
)

const DummyStack = createStackNavigator({
  
  Dummy: {
    screen: DummyPage
  }

},
{
  initialRouteName: 'Home',
  defaultNavigationOptions: ({navigation}) => {
    return {
      headerLeft:()=>(
          <Icon
            type='Entypo'
            name="add-user"
            onPress={() => navigation.openDrawer()}
            fontSize={30}
          />
      ) 
    }
  }
}
)

const drawerNav = createDrawerNavigator({
    HomePage: HomeStack,
    DummyPage: DummyStack
  },
  {
    initialRouteName: 'HomePage',
    

  }
)


const appSwitchNavigator = createSwitchNavigator({
  Dashboard: {screen: drawerNav},
  Dummy: {screen: DummyPage}
})

export default createAppContainer(appSwitchNavigator);


