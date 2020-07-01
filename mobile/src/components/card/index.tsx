import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, LayoutAnimation, UIManager, Platform, Animated, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'

// logos
import Trofeu from '../../assets/img/trofeus/premio_lider_comentarios.svg';
import StarActive from '../../assets/img/iconesPersonalizados/star_active.svg';
import StarInative from '../../assets/img/iconesPersonalizados/star_inative.svg';
import Comment from '../../assets/img/iconesPersonalizados/comment.svg';
import Address from '../../assets/img/iconesPersonalizados/address.svg';

// estilos
import styles from './styles';
import { colors } from '../../styles';


interface Props {
    id: number;
    name: string;
    type: string;
    assessments: number;
    is_open: number;
    image: string;
    brands: {
        name: string,
        image: string
    }[]
    index: number
}

const Card: React.FC<Props> = (props) => {

    const [accordion, setAccordion] = useState(false);
    const [accordionScale, setAccordionScale] = useState(new Animated.Value(0));

    if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    function handleAccordion() {

        Animated.timing(
            accordionScale,
            {
                toValue: accordion ? 0 : 1,
                duration: 250,
                useNativeDriver: true,
            }
        ).start();

        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

        setAccordion(!accordion);
    }

    function handleWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=55${35984127102}&text=Tenho interesse`);
    }


    // estrelas
    let stars = [];

    for (let i = 1; i <= 5; i++) {
        if (i <= props.assessments)
            stars[i] = (<StarActive key={i} width={25} height={25} style={styles.star} />);
        else
            stars[i] = (<StarInative key={i} width={25} height={25} style={styles.star} />);
    }

    return (

        <View style={[styles.container, { backgroundColor: props.index % 2 == 0 ? "#ededed" : "#fff" }]}>
            <TouchableOpacity onPress={handleAccordion} activeOpacity={0.8}>
                <View style={styles.main}>
                    <View>
                        <Image style={styles.barImage} source={{ uri: props.image }} />
                    </View>
                    <View style={styles.viewText}>
                        <Text style={styles.barName} numberOfLines={1}>
                            {props.name}
                        </Text>
                        <Text style={styles.barStatus}>
                            {props.is_open}
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

                        {
                            accordion ?
                                <Icon name="chevron-up" size={25} color="#BCBCBC" />
                                :
                                <Icon name="chevron-down" size={25} color="#BCBCBC" />
                        }

                    </View>
                </View>
            </TouchableOpacity>
            {
                accordion &&
                <Animated.View
                    style={[
                        styles.footer,
                        {
                            transform: [{
                                scale: accordionScale
                            }]
                        }
                    ]}
                >
                    <View style={styles.viewBeer}>
                        {
                            props.brands.map(brand => (
                                <Image key={brand.name} resizeMode="contain" style={styles.beerImage} source={{ uri: brand.image }} />
                            ))
                        }
                    </View>
                    <View style={styles.viewInformation}>
                        <TouchableOpacity style={styles.viewInformationIcon} onPress={handleWhatsapp}>
                            <Icon name="phone" size={30} color={colors.primary} style={{ height: 40, textAlignVertical: 'center' }} />
                            <Text style={styles.textInformation}>Contato</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.viewInformationIcon}>
                            <Address width={40} height={40} />
                            <Text style={styles.textInformation}>Endereço</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.viewInformationIcon}>
                            <Comment width={40} height={40} />
                            <Text style={styles.commentQtd}>38</Text>
                            <Text style={styles.textInformation}>Comentários</Text>
                        </TouchableOpacity>
                    </View>
                </Animated.View>
            }
        </View >

    );
}

export default Card;