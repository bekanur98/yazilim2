// Navigation

import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { trans } from '../helper';
import DummyPage from "../pages/DummyPage";



const dummyNav = createStackNavigator({
  DummyPage: DummyPage,
});


export default createAppContainer(dummyNav);


