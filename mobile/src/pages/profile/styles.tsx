import React from 'react';
import { StyleSheet } from 'react-native';

// Cores
import colors from '../../styles/colors';

const Styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 5
    },

    profile: {
        alignItems: 'center'
    },

    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginVertical: 15
    },

    profileName: {
        fontSize: 25,
        color: colors.primary,
        fontWeight: 'bold'
    },

    profileDescription: {
        fontSize: 15,
        color: '#000'
    },

    section: {
        flex: 1,
        margin: 15,
        borderWidth: 5,
        borderRadius: 30,
        borderColor: colors.primary
    }

});

export default Styles;