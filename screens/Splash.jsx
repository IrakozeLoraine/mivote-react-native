import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function Splash({ navigation }) {
  setTimeout(() => {
    navigation.navigate('Welcome');
  }, 3000);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
        <Image source={require('../assets/img/white_logo.png')} />
        <Text style={styles.text}>MiVote</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0B4890',
    height: '100%',
  },
  text: {
    paddingTop: 50,
    fontSize: 32,
    color: '#FFFFFF',
  },
});
