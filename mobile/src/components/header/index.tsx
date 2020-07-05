import React from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'

import styles from './styles';

const Header: React.FC = () => {
    return (

        <View style={styles.header}>
           <Icon name="search" size={20} color="#6D6D6D"  />
           <TextInput style={styles.textInput} placeholder="Pesquisar"/>
           <Icon name="map-marked-alt" size={30} color="#6D6D6D"/>
        </View>
    )
}

export default Header;