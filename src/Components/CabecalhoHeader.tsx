import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CabecalhoHeader({ navigation }) {
  return (
    <SafeAreaView style={styles.header}>
      {/* Botão Menu */}
      <TouchableOpacity style={styles.button}
          onPress={() => navigation.openDrawer()}>
            <Ionicons name="menu-outline" style={{color:'white'}} size={27}></Ionicons>
        </TouchableOpacity>

      {/* Botões Centrais */}
      <SafeAreaView style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TelaAnsiedade')}
        >
          <Text style={styles.buttonText}>Ansiedade</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate('TelaChat')}>
          <Text style={styles.buttonText}>Chat</Text>
        </TouchableOpacity>

      </SafeAreaView>

      

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image style={styles.logoPlaceholder} source={require('../../assets/Logo.jpg')}/>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  header: {
    backgroundColor: '#659696',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    width: '100%',
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 20, // Espaço entre botões
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: -50 }], // Centraliza horizontalmente
  },
  button: {
    paddingHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  logoContainer: {
    marginLeft: 'auto', // Empurra para a direita
  },
  logoPlaceholder: {
    width:100, 
    height:50
  },
});