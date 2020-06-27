import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// routes
import Home from './pages/home';


const AppStack = createStackNavigator();


const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator
                headerMode='none'
            >
                <AppStack.Screen name="Home" component={Home} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;