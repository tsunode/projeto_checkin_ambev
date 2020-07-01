import React from 'react';
import { View } from 'react-native';

import styles from './styles';

import Logo from '../../assets/img/logo.svg'

const Header: React.FC = () => {
    return (

        <View style={styles.header}>
            <Logo width={150} height={55}/>
        </View>
    )
}

export default Header;