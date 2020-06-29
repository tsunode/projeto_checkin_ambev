import React from 'react';
import { View, Image, Text } from 'react-native';

// estilos
import styles from './styles';

interface Props {
    name: string;
    status: string;
    assessments: number;
    image: string;
    beers: {
        name: string,
        image: string
    }[]
}

const Card: React.FC<Props> = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <View>
                    <Image style={styles.barImage} source={{ uri: props.image }} />
                </View>
                <View style={styles.viewText}>
                    <Text style={styles.barName}>
                        {props.name}
                    </Text>
                    <Text style={styles.barStatus}>
                        {props.status}
                    </Text>
                </View>
            </View>
            <View style={styles.viewBeer}>
                {
                    props.beers.map(beer => (
                        <Image resizeMode="contain" style={styles.beerImage} key={beer.name} source={{ uri: beer.image }} />
                    ))
                }
            </View>
        </View>
    );
}

export default Card;