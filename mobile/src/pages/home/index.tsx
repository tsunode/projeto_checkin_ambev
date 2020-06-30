import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';

// acessar API
import api from '../../services/api';

// estilos
import styles from './styles';

// componentes
import Card from '../../components/card';

interface Bars {
    id: number;
    name: string;
    status: string;
    assessments: number;
    image: string;
    beers: {
        name: string,
        image: string
    }[]
}


const Home: React.FC = () => {

    const [bars, setBars] = useState<Bars[]>();

    // useEffect(() => {
    //     api.get('teste').then(response => {
    //         console.log(response.data);
    //     });
    // }, [])

    useEffect(() => {
        // Teste recebidos
        function carregaDadosTeste() {

            const bars = [
                {
                    id: 1,
                    name: 'Coisa e Tal',
                    status: 'Aberto até 4:00',
                    assessments: 2,
                    image: 'http://vejasp.abril.com.br/wp-content/uploads/2019/11/img_3240-hdr.jpg.jpg?quality=70&strip=info&resize=680,453',
                    beers: [
                        {
                            name: 'Skol',
                            image: 'https://logodownload.org/wp-content/uploads/2014/05/Skol-logo.png'
                        },
                        {
                            name: 'Brahma',
                            image: 'https://logospng.org/download/brahma/logo-brahma-4096.png'
                        },
                        {
                            name: 'Stella Artois',
                            image: 'https://logodownload.org/wp-content/uploads/2014/08/Stella-Artois-Logo.png'
                        },
                        {
                            name: 'Budweiser',
                            image: 'https://logodownload.org/wp-content/uploads/2014/04/budweiser-logo.png'
                        }
                    ]
                },
                {
                    id: 2,
                    name: 'Bar Tar Coisa',
                    status: 'Abre as 21:00',
                    assessments: 4,
                    image: 'https://vejasp.abril.com.br/wp-content/uploads/2018/12/caulc3ad-lounge-bar-crc3a9dito-rafael-renzo-41.jpg',
                    beers: [
                        {
                            name: 'Brahma',
                            image: 'https://logospng.org/download/brahma/logo-brahma-4096.png'
                        },
                        {
                            name: 'Stella Artois',
                            image: 'https://logodownload.org/wp-content/uploads/2014/08/Stella-Artois-Logo.png'
                        },
                        {
                            name: 'Skol',
                            image: 'https://logodownload.org/wp-content/uploads/2014/05/Skol-logo.png'
                        },
                    ]
                },
                {
                    id: 3,
                    name: 'Coisa e Tal',
                    status: 'Aberto até 4:00',
                    assessments: 5,
                    image: 'https://i.pinimg.com/originals/2c/09/a1/2c09a161db48c77bf2f3facf9c8362a2.jpg',
                    beers: [
                        {
                            name: 'Skol',
                            image: 'https://logodownload.org/wp-content/uploads/2014/05/Skol-logo.png'
                        },
                        {
                            name: 'Budweiser',
                            image: 'https://logodownload.org/wp-content/uploads/2014/04/budweiser-logo.png'
                        }
                    ]
                },
                {
                    id: 4,
                    name: 'Coisa e Tal',
                    status: 'Aberto até 4:00',
                    assessments: 3,
                    image: 'https://i.pinimg.com/originals/2c/09/a1/2c09a161db48c77bf2f3facf9c8362a2.jpg',
                    beers: [
                        {
                            name: 'Skol',
                            image: 'https://logodownload.org/wp-content/uploads/2014/05/Skol-logo.png'
                        },
                    ]
                },

            ];
            setBars(bars);
        }

        carregaDadosTeste()

    }, []);


    return (
        <View style={styles.container}>

            <FlatList
            style={{backgroundColor: '#fff'}}
                data={bars}
                keyExtractor={item => String(item.id)}
                renderItem={({ item, index }) => {
                    return (
                        <Card
                            {...item}
                            index={index}
                        />
                    )
                }}
            />


        </View>
    )
}

export default Home;