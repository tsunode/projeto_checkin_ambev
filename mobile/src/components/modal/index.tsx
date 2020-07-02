import React from 'react';
import { View, Modal, Text } from 'react-native';

import styles from './styles';

import Ambev from '../../assets/img/iconesPersonalizados/logo_ambev.svg';


interface Props {
    visible: boolean,
    points: number
}


const ModalCheckin: React.FC<Props> = (props) => {

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.visible}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Check-In</Text>
                    <Ambev width={50} height={50} />
                    <View style={styles.footerModal} />
                    <View>
                        <Text>+ {props.points}</Text>
                    </View>

                </View>
            </View>
        </Modal>

    )
}

export default ModalCheckin;