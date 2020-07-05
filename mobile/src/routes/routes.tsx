import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// configs
import config from './routes.config';

// routes
import Home from '../pages/home';
import Scanner from '../pages/scanner';
import Profile from '../pages/profile';
import GenerateCode from '../pages/generateQrCode';


const AppStack = createStackNavigator();

const Tab = createBottomTabNavigator();


const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => config.screenOptions({ route, focused, color, size })
            })}
            tabBarOptions={config.tabBarOptions}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Scanner" component={Scanner} />
            <Tab.Screen name="Perfil" component={Profile} />
        </Tab.Navigator>
    )
}


const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator
                headerMode='none'
            >
                <AppStack.Screen name="Tab" component={TabNavigator} />
                <AppStack.Screen name="GenerateCode" component={GenerateCode} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;