import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 0,
        height: 0
    },

    camera: {
        height: Dimensions.get('window').height
    }
});

export default styles;