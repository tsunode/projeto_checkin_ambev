import React from 'react';
import { } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

// Cores
import colors from '../styles/colors';

interface Props {
    route: RouteProp<Record<string, object | undefined>, string>;
    focused: boolean;
    color: string;
    size: number;
}

const screenOptions = (props: Props) => {

    let iconColor;
    let iconName;
    let style = {};

    if (props.route.name === 'Home') {
        iconColor = props.focused ? colors.textPrimary: colors.textSecondary;
        iconName = 'beer';
        style = {marginLeft: 8}; // ícone de cerveja centralizar
    } else if (props.route.name === 'Scanner') {
        iconColor = props.focused ? colors.textPrimary: colors.textSecondary;
        iconName = 'qrcode';
    } else if (props.route.name === 'Perfil') {
        iconColor = props.focused ? colors.textPrimary: colors.textSecondary;
        iconName = 'user-alt';
    }

    return <Icon name={String(iconName)} style={style} size={30} color={iconColor} />;
}

const tabBarOptions = {

    activeTintColor: colors.textPrimary,
    inactiveTintColor: colors.textSecondary,
    activeBackgroundColor: colors.primary,
    inactiveBackgroundColor: colors.primary,
    style: {
        borderTopWidth: 0,
        borderTopColor: "transparent",
        elevation: 0,
        shadowOpacity: 0,
        shadowOffset: {
            height: 0,
        },
        shadowRadius: 0,
        height:  60
    }
}

export default { screenOptions, tabBarOptions };