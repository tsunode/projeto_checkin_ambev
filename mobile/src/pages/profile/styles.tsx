import React from 'react';
import { StyleSheet } from 'react-native';

// Cores
import colors from '../../styles/colors';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5
    },

    profile: {
        flexDirection: 'row',
        marginVertical: 10,
        padding: 5
    },

    profileImage: {
        width: 90,
        height: 90,

    },

    profileName: {
        fontSize: 22,
        color: '#444444',
        fontFamily: 'Rubik Bold'
    },

    viewNivel: {
        flex: 1,
        alignItems: 'flex-end'
    },

    textNivelUser: {
        color: colors.primary,
        fontFamily: 'Rubik Bold',
        fontSize: 28,
        margin: 0,
        padding: 0,
    },

    textNivel: {
        color: colors.primary,
        fontFamily: 'Rubik Regular',
        fontSize: 22,
        marginBottom: -10,
        padding: 0,
    },

    viewNivelText: {
        position: "absolute",
        height: 90,
        width: 90,
        justifyContent: 'center',
        alignItems: 'center'
    },

    profileDescription: {
        fontSize: 15,
        color: '#000'
    },

    section: {
        flex: 1,
    },

    div: {
        flex: 1,
    },
    title: {
        padding: 5,
        backgroundColor: '#EDEDED',
        color: '#444444',
        fontFamily: 'Rubik Bold',
        textAlign: 'center',
        fontSize: 22
    },

    viewAvaliacoes: {
        flexDirection: 'row',
        padding: 5,
    },

    viewName: {
        flex: 1,
        justifyContent: 'center'
    },

    viewComment: {
        flex: 1,
        textAlign: "left",
        color: '#898989',
        fontFamily: 'Rubik Regular'
    },

    viewStar: {
        flexDirection: 'row',
        justifyContent: 'center'
    },

    barNameView: {
        flexDirection: 'row'
    },

    barName: {
        fontSize: 25,
        fontFamily: 'Rubik Regular',
        color: colors.primary,
        marginRight: 2
    },

    viewMedalhas: {
        // flex: 1,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    scoreView:{
        flexDirection: 'row',
        backgroundColor: colors.primary,
        borderWidth: 5,
        borderColor: colors.textPrimary,
        borderRadius: 50,
        padding: 10,
        maxWidth: 250,
        marginTop: 10
    },

    scoreText:{
        fontSize: 40,
        color: colors.textSecondary,
        marginHorizontal: 5
        // fontFamily: 'Rubik Bold'
    },

    recompensaImage:{
        maxWidth: 70,
        maxHeight: 70
    },

    recompensaView:{
        borderWidth: 4,
        width: 110,
        height: 110,
        borderRadius: 20,
        borderColor: colors.primary,
        padding: 10,
        alignItems: 'center',
        margin: 5
    },

    recompensaText:{
        color: colors.primary
    },

    recompensaTextMore:{
        color: colors.primary,
        textAlign: 'center',
        textAlignVertical: 'center',
        flex:1,
        fontSize: 30,
        fontWeight: 'bold'
    }

});

export default Styles;