import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import styles from './styles';

import Header from '../../components/header';

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
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Profile: React.FC = () => {

  const starsQtd = 4;
  const navigation = useNavigation();

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
            <Text style={styles.profileName}>Gabriel Tsunoda</Text>
            <Text style={styles.profileDescription}>Cervejeiro Profissional</Text>
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
            <View style={styles.viewMedalhas}>
              <MedalhaBronze width={100} height={100} />
              <MedalhaPrata width={100} height={100} />
              <MedalhaOuro width={100} height={100} />
              <MedalhaPremium width={100} height={100} />
            </View>
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
              <View style={styles.scoreView}>
                <Text style={styles.scoreText}> 15.264</Text>
                <Tampinha width={60} height={60} />
              </View>
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
            </View>
          </View>
        </View>
      </View>
    </>

  )
}

export default Profile;