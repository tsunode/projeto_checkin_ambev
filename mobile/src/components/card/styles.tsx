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
        fontSize: 20,
        color: '#6d6d6d',
        fontFamily: 'Rubik Bold',
        // fontWeight:'bold',
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
        marginRight: 2
    },

    viewText: {
        flexDirection: "column",
        marginLeft: 7,
        flex: 3,
        justifyContent: 'center'
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 20
    },

    viewBeer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'stretch',
        flexWrap: 'wrap',
    },

    viewInformation: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        // borderLeftWidth: 3,
        // borderLeftColor: colors.primary,
    },

    securityIcon:{
        position: 'absolute',
        bottom: -3
    },
    viewInformationIcon: {
        alignItems: 'center',
        marginHorizontal: 5
    },

    textInformation: {
        color: colors.primary,
        textAlign: 'center',
        fontSize: 10
    },

    commentQtd: {
        position: 'absolute',
        width: 40,
        height: 40,
        fontFamily: 'Rubik Regular',
        color: colors.textPrimary,
        textAlignVertical: 'center',
        textAlign: 'center',
    },

    beerImage: {
        width: 50,
        height: 50,
        marginHorizontal: 10
    }
});

export default Styles;