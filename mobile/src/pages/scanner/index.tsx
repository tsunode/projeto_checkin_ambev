import React, {useEffect} from 'react';
import { } from 'react-native';

import QrCodeScanner from '../../components/qrCodeScanner';

//acessar API
import api from '../../services/api';

const Scanner: React.FC = () => {

    useEffect(() =>{
        api.get('teste').then(response => {
            console.log(response.data);
        });
    }, [])

    return (
        <QrCodeScanner />
        // <QRCodeCreate value="teste123" />
        // <Map/>
    )
}

export default Scanner;