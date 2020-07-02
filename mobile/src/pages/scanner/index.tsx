import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import QrCodeScanner from '../../components/qrCodeScanner';
import Modal from '../../components/modal';

import Tampinha from '../../assets/img/iconesPersonalizados/tampinha.svg';


//acessar API
import api from '../../services/api';

// Cores
import colors from '../../styles/colors';

const Scanner: React.FC = () => {

    const [score, setScore] = useState(15264);
    const [pointsReceived, setPointsReceived] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);

    async function handleScanner(code: String) {

        await api.post('checkin', { id_user: 1, code }).then(response => {
            if (response.data.validado) {

                const { points } = response.data;

                setPointsReceived(points);
                setModalVisible(true);

                let i = 0;

                const interval = setInterval(() => {
                    if (i == points) {
                        clearInterval(interval)
                    } else {
                        setScore(score => score + 1);
                        i++;
                    }
                }, 1);
            }
        }).catch((error) => {
            if (error.response.status == 403) {
                setModalVisible(true);

                setTimeout(() => setModalVisible(false), 5000);
                console.log(error.response.data.message);
            }
        });
    }

    return (
        <>
            <QrCodeScanner setScore={(code) => handleScanner(code)} />
            <View style={styles.container}>
                <View style={styles.scoreView}>
                    <Text style={styles.scoreText}>{score}</Text>
                    <Tampinha width={40} height={40} />
                </View>
            </View>
            <Modal visible={modalVisible} points={pointsReceived} />
        </>
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