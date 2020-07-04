import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

// acessar API
import api from '../../services/api';

//component
import QrCodeCreate from '../../components/qrCodeCreate';

// import { Container } from './styles';

const generateQrCode: React.FC = () => {


    const [code, setCode] = useState('0');

    useEffect(() => {
        api.get('code/1').then(response => {
            console.log(response.data);
            setCode(response.data);
        });
    }, [])
    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <QrCodeCreate value={code} />
        </View>
    )
}

export default generateQrCode;