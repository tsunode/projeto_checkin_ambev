import React from 'react';
import { Linking } from 'react-native';

// lib de QRcode
import QRCodeScanner from 'react-native-qrcode-scanner';
// import { RNCamera } from 'react-native-camera';

import styles from './styles';

const qrCodeScanner: React.FC = () => {

    function onSuccess(e: any) {
        console.log(e.data);
        Linking.openURL(e.data).catch(err =>
            console.error('An error occured', err)
        );
    }

    return (
        <QRCodeScanner
            onRead={onSuccess}
            showMarker={true}
            containerStyle={styles.container}
            cameraStyle={styles.camera}
        />
    );
}

export default qrCodeScanner;