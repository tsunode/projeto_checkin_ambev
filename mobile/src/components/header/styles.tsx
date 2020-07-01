import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

// Cores
import colors from '../../styles/colors';

const Styles = StyleSheet.create({
    header: {
        width: Dimensions.get('screen').width,
        height: 55,
        flexDirection: "row",
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: colors.primary,
        margin: 0,
        padding: 0
    },

});

export default Styles;