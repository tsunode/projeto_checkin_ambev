import React from 'react';
import { Linking } from 'react-native';

// lib de QRcode
import QRCodeScanner from 'react-native-qrcode-scanner';
// import { RNCamera } from 'react-native-camera';

import styles from './styles';

interface Props {
    setScore(code: string): void
}

const qrCodeScanner: React.FC<Props> = (props) => {

    async function onSuccess(e: any) {

        props.setScore(e.data);

    }

    return (
        <QRCodeScanner
            onRead={onSuccess}
            showMarker={true}
            containerStyle={styles.container}
            cameraStyle={styles.camera}
            reactivate={true}
            reactivateTimeout={15000}
        />
    );
}

export default qrCodeScanner;