import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'

// logos
import Trofeu from '../../assets/img/trofeus/premio_lider_comentarios.svg';
import StarActive from '../../assets/img/star_active.svg';
import StarInative from '../../assets/img/star_inative.svg';

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
    }[];
    index: number
}

const Card: React.FC<Props> = (props) => {

    const [accordion, setAccordion] = useState(false);

    function handleAccordion() {
        setAccordion(!accordion);
    }

    let stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= props.assessments)
            stars[i] = (<StarActive width={25} height={25} style={styles.star}/>);
        else
            stars[i] = (<StarInative width={25} height={25} style={styles.star}/>);
    }

    const iconAccordion = (<Icon name="chevron-up" size={25} />);
    return (
        <View style={[styles.container, { backgroundColor: props.index % 2 == 0 ? "#ededed" : "#fff" }]}>
            <View style={styles.main}>
                <View>
                    <Image style={styles.barImage} source={{ uri: props.image }} />
                </View>
                <View style={styles.viewText}>
                    <Text style={styles.barName} numberOfLines={1}>
                        {props.name}
                    </Text>
                    <Text style={styles.barStatus}>
                        {props.status}
                    </Text>
                    <View style={styles.viewStar}>
                        {stars}
                    </View>
                </View>
                <View style={styles.viewTrophy}>
                    <Trofeu width={60} height={90} style={styles.logoTrophy} />
                    <Text style={styles.textTrophy}>Líder em comentários</Text>
                </View>
                <View style={styles.viewArrow}>
                    <TouchableOpacity onPress={handleAccordion}>
                        {
                            accordion ?
                                <Icon name="chevron-up" size={25} />
                                :
                                <Icon name="chevron-down" size={25} />
                        }

                    </TouchableOpacity>
                </View>
            </View>
            <View style={[styles.viewBeer, { display: accordion ? 'flex' : 'none' }]}>
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