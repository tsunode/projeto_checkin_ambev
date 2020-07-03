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

    const [score, setScore] = useState(0);
    const [pointsReceived, setPointsReceived] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalErrorVisible, setModalErrorVisible] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        api.get('users/1').then(response => {
            setScore(response.data.points)
        });
    }, [score])

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

                setModalErrorVisible(true);

                console.log(error.response.data.message);

                setError(error.response.data.message);
            }
        });

        setTimeout(() =>{
            setModalVisible(false)
            setModalErrorVisible(false)
        }, 5000);
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
            <Modal visible={modalErrorVisible} error={error} />
        </>
    )


}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    scoreView: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderRadius: 50,
        paddingHorizontal: 15,
        // paddingVertical: 5,
        maxWidth: 190,
        marginBottom: 20,
        marginRight: 20
    },

    scoreText: {
        fontSize: 40,
        color: colors.textSecondary,
        marginHorizontal: 10,
        fontFamily: 'SUBSCRIBERRegular',
        // fontFamily: 'Rubik Bold'
    },
})

export default Scanner;