import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';

// acessar API
import api from '../../services/api';

// estilos
import styles from './styles';

// componentes
import Card from '../../components/card';
import Header from '../../components/header';

interface Locations {
    id: number;
    name: string;
    type: string;
    assessments: number;
    is_open: boolean;
    image: string;
    brands: {
        name: string,
        image: string
    }[]
}

const Home: React.FC = () => {

    const [locations, setLocations] = useState<Locations[]>();

    useEffect(() => {
        api.get('locations').then(response => {
            setLocations(response.data)
        });
    }, [])

    return (
        <>
            <Header />
            <View style={styles.container}>
                <FlatList
                    style={{ backgroundColor: '#fff' }}
                    data={locations}
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
        </>
    )
}

export default Home;