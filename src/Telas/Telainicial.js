import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Telainicial({ navigation }) {
  return (
    <SafeAreaView style={estilos.container}>
      <LinearGradient
        colors={['#659696', '#8fb3b3']}
        style={estilos.gradienteCabecalho}
      >

      </LinearGradient>

      <View style={estilos.conteudo}>
        <Text style={estilos.tituloPrincipal}>Central de Ajuda Psicológica</Text>

        <View style={estilos.cartao}>
          <Text style={estilos.descricao}>
            Conectamos você a psicólogos especializados de forma
            acessível e sigilosa. Oferecemos suporte emocional
            personalizado, com sessões online ou presenciais.
          </Text>
        </View>

        <View style={estilos.containerDestaques}>
          <View style={estilos.itemDestaque}>
            <Text style={estilos.emojiDestaque}>🤝</Text>
            <Text style={estilos.textoDestaque}>Acolhimento</Text>
          </View>
          <View style={estilos.itemDestaque}>
            <Text style={estilos.emojiDestaque}>🚀</Text>
            <Text style={estilos.textoDestaque}>Primeiros Socorros Emocionais</Text>
          </View>
        </View>

        <TouchableOpacity
          style={estilos.botaoPrincipal}
          onPress={() => navigation.navigate('Detalhes')}
        >
          <Text style={estilos.textoBotaoPrincipal}>Agendar Consulta</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  gradienteCabecalho: {
    width: '100%',
  },
  conteudo: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  tituloPrincipal: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#659696',
    marginBottom: 24,
    textAlign: 'center',
  },
  cartao: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#659696',
    marginBottom: 24,
    shadowColor: '#659696',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  descricao: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    textAlign: 'justify',
  },
  containerDestaques: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 32,
  },
  itemDestaque: {
    alignItems: 'center',
    width: '45%',
  },
  emojiDestaque: {
    fontSize: 28,
    marginBottom: 8,
  },
  textoDestaque: {
    fontSize: 14,
    color: '#659696',
    fontWeight: '600',
    textAlign: 'center',
  },
  botaoPrincipal: {
    backgroundColor: '#659696',
    padding: 16,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 20,
  },
  textoBotaoPrincipal: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});