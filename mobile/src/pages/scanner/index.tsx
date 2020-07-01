import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import QrCodeScanner from '../../components/qrCodeScanner';
import Tampinha from '../../assets/img/iconesPersonalizados/tampinha.svg';

//acessar API
import api from '../../services/api';

// Cores
import colors from '../../styles/colors';

const Scanner: React.FC = () => {

    const [score, setScore] = useState(15264)
    // useEffect(() => {
    //     api.get('teste').then(response => {
    //         console.log(response.data);
    //     });
    // }, [])

    function handleScanner() {
        console.log("entrei");

        let scoreAux = score + 500;
        let i = 0;
        const interval = setInterval(() => {
            if(i == 500){
                clearInterval(interval)
            }else{
                setScore(score => score + 1);
                i++;
            }
        }, 1);

    }

    return (
        <>
            <QrCodeScanner setScore={() => handleScanner()} />
            <View style={styles.container}>
                <View style={styles.scoreView}>
                    <Text style={styles.scoreText}>{score}</Text>
                    <Tampinha width={40} height={40} />
                </View>
            </View>
        </>
        // <QRCodeCreate value="teste123" />
        // <Map/>
    )


}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },

    scoreView: {
        flexDirection: 'row',
        backgroundColor: colors.primary,
        borderWidth: 5,
        borderColor: colors.textPrimary,
        borderRadius: 50,
        padding: 10,
        maxWidth: 190,
        marginBottom: 20,
        marginRight: 20
    },

    scoreText: {
        fontSize: 30,
        color: colors.textSecondary,
        marginHorizontal: 5
        // fontFamily: 'Rubik Bold'
    },
})

export default Scanner;