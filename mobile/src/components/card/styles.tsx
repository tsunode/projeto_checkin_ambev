import React from 'react';
import { StyleSheet } from 'react-native';

// Cores
import colors from '../../styles/colors';

const Styles = StyleSheet.create({

    container: {
        paddingVertical: 10,
        flexDirection: 'column',
    },

    main: {
        flexDirection: 'row',
        paddingHorizontal: 10,
    },

    logoTrophy: {
        maxHeight: 90
    },

    barImage: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    viewTrophy: {
        alignItems: 'center',
    },

    textTrophy: {
        fontSize: 8,
        color: '#6D6D6D',
        fontStyle: 'italic'
    },

    barName: {
        fontSize: 25,
        color: colors.primary
    },

    barStatus: {
        fontSize: 16,
        color: '#898989'
    },

    viewArrow: {
        flex: 0.6,
        alignItems: 'flex-end',
    },

    viewStar: {
        flexDirection: 'row',
        marginTop: 5
    },

    star: {
        margin: 2
    },

    viewText: {
        flexDirection: "column",
        marginLeft: 5,
        flex: 3,
    },
    viewBeer: {
        flexDirection: 'row',
        backgroundColor: colors.textPrimary,
        justifyContent: 'center',
        marginTop: 20
    },

    beerImage: {
        width: 60,
        height: 60,
        marginHorizontal: 10
    }
});

export default Styles;