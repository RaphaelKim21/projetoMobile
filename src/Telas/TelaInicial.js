import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, Image,} from 'react-native';

export default function TelaInicial({ navigation }) {
  return (
    <SafeAreaView style={estilos.container}>
      <LinearGradient
        colors={['#659696', '#8fb3b3']}
        style={estilos.gradienteCabecalho}
      />

      <ScrollView
        contentContainerStyle={estilos.conteudo}
        showsVerticalScrollIndicator={false}
      >
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

        <View style={{ height: 60 }} />

        <Text style={estilos.tituloSecundario}>
          O <Text style={estilos.destaque}>Mindly sempre está</Text> com{' '}
          <Text style={estilos.negrito}>você!</Text>
        </Text>

        <View style={estilos.listaServicos}>
          <Text style={estilos.itemServico}>✔ Dicas para manter equilíbrio emocional</Text>
          <Text style={estilos.itemServico}>✔ Técnicas de relaxamento e respiração</Text>
          <Text style={estilos.itemServico}>✔ Conversa online com especialistas</Text>
          <Text style={estilos.itemServico}>✔ Sistema de avaliação psicológica</Text>
        </View>

        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <Image
            source={require('../../assets/apoio.png')}
            style={estilos.imagemApoio}
          />
        </View>

        <View style={{ height: 100 }} />

        <Text style={estilos.fraseFinal}>Aproveite os serviços Mindly!</Text>

        <Image
          source={require('../../assets/logoazul.png')}
          style={estilos.iconeFinal}
        />
      </ScrollView>
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
    padding: 20,
    paddingBottom: 40,
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
    marginBottom: 10,
  },
  textoBotaoPrincipal: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  tituloSecundario: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 25,
    color: '#333',
  },
  destaque: {
    color: '#659696',
    fontWeight: 'bold',
  },
  negrito: {
    fontWeight: 'bold',
  },
  listaServicos: {
    marginBottom: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  itemServico: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  imagemApoio: {
    width: 270,
    height: 170,
    borderRadius: 6,
  },
  fraseFinal: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 16,
    color: '#333',
  },
  iconeFinal: {
    width: 45,
    height: 40,
    alignSelf: 'center',
  },
});
