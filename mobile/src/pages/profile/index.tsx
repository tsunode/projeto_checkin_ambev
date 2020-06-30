import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';

// import { Container } from './styles';

const Profile: React.FC = () => {
  return (
      <View style={styles.container}>
          <View style={styles.profile}>
                <Image style={styles.profileImage}  source={require('../../assets/img/tests/perfil.jpg')} />
                <Text style={styles.profileName}> GABRIEL TSUNODA</Text>
                <Text style={styles.profileDescription}> Cervejeiro Profissional</Text>
          </View>
          <View style={styles.section}>
            {/* Historico de check-in aqui  */}
          </View>
      </View>

  )
}

export default Profile;