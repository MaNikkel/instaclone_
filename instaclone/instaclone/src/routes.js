import React from 'react';
import {createAppContainer, createStackNavigator, createBottomTabNavigator, createDrawerNavigator, HeaderBackButton} from 'react-navigation';
import {Image} from 'react-native';

import Feed from './pages/Feed';
import New from './pages/New';

import logo from './assets/logo.png';

export default createAppContainer(//função que precisa ficar em torno de todas as rotas
    createStackNavigator({
        Feed,
        New,
    }, {
        defaultNavigationOptions: {
            headerTintColor: '#000',
            headerTitle: <Image style={{marginHorizontal: 20}} source={logo}/>,
            headerBackTitle: null,
        },
        mode: 'modal'
    })
);