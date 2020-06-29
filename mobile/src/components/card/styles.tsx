import React from 'react';
import { StyleSheet } from 'react-native';

// Cores
import colors from '../../styles/colors';

const Styles = StyleSheet.create({

    container:{
        paddingVertical: 20,
        backgroundColor: colors.primary,
        flexDirection: 'column',
        marginVertical: 10
    },

    main:{
        flexDirection: 'row',
        paddingHorizontal: 10
    },

    barImage:{
        width: 100,
        height: 100,
        borderRadius: 50
    },

    barName:{
        fontSize: 30,
        color: colors.textSecondary
    },

    barStatus:{
        fontSize: 16,
        color: colors.textPrimary
    },

    viewText:{
        flexDirection: "column",
        // alignItems: 'center',
        marginLeft: 15
    },

    viewBeer:{
        flexDirection: 'row',
        backgroundColor: colors.textPrimary,
        justifyContent: 'center',
        marginTop: 20
    },

    beerImage:{
        width: 60,
        height: 60,   
        marginHorizontal: 10
    }
});

export default Styles;