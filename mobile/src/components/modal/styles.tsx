import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    modalView: {
        margin: 20,
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 15,
        paddingTop: 10,
        alignItems: "center",
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        zIndex: 1000
    },

    modalText: {
        color: colors.primary,
        fontSize: 40,
        fontFamily: 'Rubik Regular'
    },

    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15
    },

    camera: {
        height: Dimensions.get('window').height
    },

    points: {
        color: colors.primary,
        fontSize: 65,
        marginRight: 20,
        fontFamily: 'SUBSCRIBERRegular'
    },

    header: {
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 2,
        borderColor: '#ededed',
    },

    message: {
        position: 'absolute',
        bottom: -10,
        backgroundColor: colors.primary,
        paddingHorizontal: 15,
        paddingVertical: 2,
        borderRadius: 50
    }
});

export default styles;