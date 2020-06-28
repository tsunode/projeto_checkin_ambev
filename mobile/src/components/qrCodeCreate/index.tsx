import React from 'react';
import { View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

interface Props {
    value: string
}

const qrCodeCreate: React.FC<Props> = (props) => {
    return (
        <QRCode
            value={props.value}

        />
    );
}

export default qrCodeCreate;