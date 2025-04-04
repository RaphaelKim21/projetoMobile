import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CabecalhoHeader({ navigation }) {
  return (
    <View style={styles.header}>
      {/* Botão Voltar */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={20} color="white" />
      </TouchableOpacity>

      {/* Botões Centrais */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Telaansiedade')} 
        >
          <Text style={styles.buttonText}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('Telachat')}>
          <Text style={styles.buttonText}>Chat</Text>
        </TouchableOpacity>
      </View>

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Text style={styles.logoPlaceholder}>LOGO</Text>
      </View>
    </View>
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
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});