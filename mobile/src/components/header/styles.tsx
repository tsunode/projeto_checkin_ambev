import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

// Cores
import colors from '../../styles/colors';

const Styles = StyleSheet.create({
    header: {
        width: Dimensions.get('screen').width,
        height: 55,
        flexDirection: "row",
        backgroundColor: '#fff',
        margin: 0,
        paddingHorizontal: 20,
        alignItems: 'center'
    },

    textInput:{
        flex: 1,
        fontSize: 18
    }

});

export default Styles;