import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'

import styles from './styles';

const Header: React.FC = () => {
    return (

        <View style={styles.header}>
           <Text style={styles.nickname}>/tsunodabiel</Text>
           <Icon name="cog" size={30} color="#6D6D6D"/>
        </View>
    )
}

export default Header;