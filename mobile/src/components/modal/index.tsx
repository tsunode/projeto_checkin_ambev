import React, { useState } from 'react';
import { View, Modal, Text, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';

import Ambev from '../../assets/img/iconesPersonalizados/logo_ambev.svg';
import Tampinha from '../../assets/img/iconesPersonalizados/tampinha.svg'
import { colors } from '../../styles';


interface Props {
    visible: boolean,
    points?: number;
    error?: string;
}

const ModalCheckin: React.FC<Props> = (props) => {

    const [opacity, setOpacity] = useState(new Animated.Value(0));
    const [scale, setScale] = useState(new Animated.Value(0));

    function handleShow() {

        Animated.timing(
            opacity,
            {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true,
            }
        ).start();

        Animated.spring(
            scale,
            {
                toValue: 1,
                friction: 2,
                useNativeDriver: true,
            }
        ).start();
    }
    let ModalView;
    if (props.error != undefined) {
        ModalView = (
            <View style={styles.modalView}>
                <View style={styles.header}>
                    <Icon name="exclamation-triangle" size={70} color={colors.primary} />
                    <Text style={styles.modalText}>Check-In</Text>
                    <Animated.View
                        style={{
                            opacity: opacity
                        }}
                    >
                        <Ambev width={80} height={20} />
                    </Animated.View>
                </View>
                <Animated.View
                    style={[
                        styles.footer,
                        {
                            transform: [{ scale: scale }]
                        }
                    ]}
                >
                    <Text style={[styles.points, { fontSize: 35 }]}>{props.error}</Text>
                </Animated.View>
                <View style={styles.message}>
                    <Text style={{ color: '#fff' }}>
                        Beba com moderação
                    </Text>
                </View>
            </View>
        )
    } else {
        ModalView = (
            <View style={styles.modalView}>
                <View style={styles.header}>
                    <Icon name="check-circle" size={70} color={colors.primary} />
                    <Text style={styles.modalText}>Check-In</Text>
                    <Animated.View
                        style={{
                            opacity: opacity
                        }}
                    >
                        <Ambev width={80} height={20} />
                    </Animated.View>
                </View>
                <Animated.View
                    style={[
                        styles.footer,
                        {
                            transform: [{ scale: scale }]
                        }
                    ]}
                >
                    <Text style={styles.points}>+{props.points}</Text>
                    <Tampinha width={60} height={60} />
                </Animated.View>
                <View style={styles.message}>
                    <Text style={{ color: '#fff' }}>
                        Beba com moderação
                    </Text>
                </View>
            </View>
        )
    }


    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.visible}
            onShow={handleShow}
        >
            <View style={styles.centeredView}>
                {ModalView}
            </View>
        </Modal>

    )
}

export default ModalCheckin;