import React, { useState } from 'react';
import { View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import styles from './styles';

import Header from '../../components/header_profile';

// logos
import LogoNivel from '../../assets/img/iconesPersonalizados/nivel.svg';
import MedalhaBronze from '../../assets/img/trofeus/medalhaBronze.svg';
import MedalhaPrata from '../../assets/img/trofeus/medalhaPrata.svg';
import MedalhaOuro from '../../assets/img/trofeus/medalhaOuro.svg';
import MedalhaPremium from '../../assets/img/trofeus/medalhaPremium.svg';
import Comment from '../../assets/img/iconesPersonalizados/comment.svg';
import StarActive from '../../assets/img/iconesPersonalizados/star_active.svg';
import StarInative from '../../assets/img/iconesPersonalizados/star_inative.svg';
import Tampinha from '../../assets/img/iconesPersonalizados/tampinha.svg';

import { useNavigation } from '@react-navigation/native';

// acessar API
import api from '../../services/api';

interface User {
  name: string;
  points: number;
}

type Props = User;


const Profile: React.FC = () => {

  const starsQtd = 4;
  const navigation = useNavigation();
  const [user, setUser] = useState<User>();

  useFocusEffect(
    React.useCallback(() => {

      api.get('users/1').then(response => {
        setUser(response.data)
      });

    }, [])
  );

  let stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= starsQtd)
      stars[i] = (<StarActive key={i} width={35} height={35} />);
    else
      stars[i] = (<StarInative key={i} width={35} height={35} />);
  }

  function handleGenerateCode() {
    navigation.navigate('GenerateCode');
  }

  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={styles.profile}>
          <Image style={styles.profileImage} source={require('../../assets/img/tests/perfil.jpg')} />
          <View>
            <Text style={styles.profileName}>{user?.name}</Text>
            <Text style={styles.profileDescription}>Cervejeiro Profissional</Text>
            <View style={{ flexDirection: 'row' }}>
              <Icon name="instagram" size={25} style={{ marginRight: 5 }} />
              <Icon name="facebook" size={25} />
            </View>
          </View>
          <TouchableOpacity style={styles.viewNivel} onPress={handleGenerateCode}>
            <LogoNivel width={90} height={90} />
            <View style={styles.viewNivelText}>
              <Text style={styles.textNivel}>Nível</Text>
              <Text style={styles.textNivelUser}>42</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.section}>
          <View >
            <Text style={styles.title}>Últimas Conquistas</Text>

            <ScrollView horizontal contentContainerStyle={styles.viewMedalhas} showsHorizontalScrollIndicator={false} automaticallyAdjustContentInsets={true}>
              <MedalhaBronze style={styles.medal} width={100} height={100} />
              <MedalhaPrata style={styles.medal} width={100} height={100} />
              <MedalhaOuro style={styles.medal} width={100} height={100} />
              <MedalhaPremium style={styles.medal} width={100} height={100} />
            </ScrollView>

          </View>
          <View>
            <Text style={styles.title}>Avaliações</Text>
            <View style={styles.viewAvaliacoes}>
              <View style={styles.viewName}>
                <View style={styles.barNameView}>
                  <Text style={styles.barName}> Bar do Gago</Text>
                  <Comment width={20} height={20} />
                </View>
                <View style={styles.viewStar}>
                  {stars}
                </View>
              </View>
              <Text numberOfLines={5} style={styles.viewComment}>
                "Ótimo atendimento e cerveja trincando!!! Alcool em gel em todas as mesas e respeitando as medidas indicadas de distanciamento"
              </Text>
            </View>
          </View>
          <View style={styles.div}>
            <Text style={styles.title}>Recompensas</Text>
            <View style={{ alignItems: 'center' }}>
              <ScrollView horizontal contentContainerStyle={{ margin: 5 }} showsHorizontalScrollIndicator={false} >
                <View style={styles.recompensaView}>
                  <Image style={styles.recompensaImage} source={require('../../assets/img/trofeus/premio1.png')}></Image>
                  <Text style={styles.recompensaText}>Placas</Text>
                </View>
                <View style={styles.recompensaView}>
                  <Image style={styles.recompensaImage} source={require('../../assets/img/trofeus/premio2.png')}></Image>
                  <Text style={styles.recompensaText}>Camisetas</Text>
                </View>
                <View style={styles.recompensaView}>
                  <Image style={styles.recompensaImage} source={require('../../assets/img/trofeus/premio3.png')}></Image>
                  <Text style={styles.recompensaText}>Descontos</Text>
                </View>
                <View style={styles.recompensaView}>
                  <Text style={styles.recompensaTextMore}>+55</Text>
                </View>
              </ScrollView>
              <View>
                <View style={styles.scoreView}>
                  <Text style={styles.scoreText}> {user?.points}</Text>
                  <Tampinha width={50} height={50} />
                </View>
                <Icon name="plus-circle" size={25} color="#00afef" style={styles.iconPlus} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </>

  )
}

export default Profile;