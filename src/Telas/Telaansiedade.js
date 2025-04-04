import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CabecalhoHeader from '../Components/CabecalhoHeader';

export default function Telaansiedade({ navigation }) {
  return (
    <View style={estilos.container}>
      
      <LinearGradient
        colors={['#659696', '#8fb3b3']}
        style={estilos.gradienteCabecalho}
      >
        <CabecalhoHeader navigation={navigation} />
      </LinearGradient>

      <ScrollView contentContainerStyle={estilos.containerRolagem}>
        
        <View style={estilos.containerTitulo}>
          <Text style={estilos.tituloPrincipal}>Sinais de Ansiedade</Text>
          <Text style={estilos.subtitulo}>Reconhecer para cuidar melhor</Text>
        </View>

        
        <View style={estilos.containerConteudo}>
          <Text style={estilos.textoIntroducao}>
            A ansiedade é uma resposta natural do corpo diante de situações desafiadoras, mas quando se torna frequente ou intensa, pode ser um sinal de que algo não está bem.
          </Text>

          <View style={estilos.secao}>
            <Text style={estilos.textoConteudo}>
              Muitas pessoas experimentam uma sensação constante de preocupação, como se algo ruim estivesse prestes a acontecer, mesmo sem um motivo aparente. Esse tipo de pensamento pode vir acompanhado de medo intenso, dificuldade de concentração ou até mesmo "brancos" mentais.
            </Text>
          </View>

          <View style={estilos.cardDestaque}>
            <Text style={estilos.tituloDestaque}>Sinais Físicos</Text>
            <Text style={estilos.textoDestaque}>
              Palpitações, sudorese, tremores e tonturas são comuns, assim como dores no peito ou falta de ar — sintomas que muitas vezes são confundidos com problemas cardíacos.
            </Text>
          </View>

          <View style={estilos.secao}>
            <Text style={estilos.textoConteudo}>
              No comportamento, é possível notar mudanças como evitar certos lugares ou situações, irritabilidade sem causa aparente, dificuldade para dormir ou acordar várias vezes durante a noite.
            </Text>
          </View>

          
          <View style={estilos.boxAjuda}>
            <Text style={estilos.tituloAjuda}>Quando Buscar Ajuda?</Text>
            <Text style={estilos.textoAjuda}>
              Se esses sintomas persistem por mais de seis meses, atrapalham sua rotina ou causam sofrimento significativo, é importante buscar ajuda profissional.
            </Text>
            <TouchableOpacity 
              style={estilos.botaoAjuda}
              onPress={() => navigation.navigate('Agendamento')}
            >
              <Text style={estilos.textoBotaoAjuda}>Agendar Consulta</Text>
            </TouchableOpacity>
          </View>

          <Text style={estilos.textoFinal}>
            Lembre-se: você não está sozinho(a), e procurar ajuda é um ato de coragem e autocuidado.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  gradienteCabecalho: {
    width: '100%',
  },
  containerRolagem: {
    paddingBottom: 40,
  },
  containerTitulo: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: 'rgba(101, 150, 150, 0.1)',
  },
  tituloPrincipal: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#659696',
    marginBottom: 5,
  },
  subtitulo: {
    fontSize: 16,
    color: '#8fb3b3',
    fontStyle: 'italic',
  },
  containerConteudo: {
    padding: 25,
  },
  textoIntroducao: {
    fontSize: 18,
    lineHeight: 28,
    color: '#333',
    marginBottom: 25,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  secao: {
    marginBottom: 25,
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
  },
  textoConteudo: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
  },
  cardDestaque: {
    backgroundColor: 'rgba(101, 150, 150, 0.1)',
    padding: 20,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#659696',
    marginVertical: 15,
  },
  tituloDestaque: {
    fontSize: 20,
    fontWeight: '600',
    color: '#659696',
    marginBottom: 10,
  },
  textoDestaque: {
    fontSize: 15,
    lineHeight: 22,
    color: '#444',
  },
  boxAjuda: {
    backgroundColor: '#659696',
    padding: 25,
    borderRadius: 10,
    marginVertical: 25,
    alignItems: 'center',
  },
  tituloAjuda: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 15,
    textAlign: 'center',
  },
  textoAjuda: {
    fontSize: 16,
    lineHeight: 24,
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  botaoAjuda: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  textoBotaoAjuda: {
    color: '#659696',
    fontWeight: 'bold',
    fontSize: 16,
  },
  textoFinal: {
    fontSize: 17,
    lineHeight: 26,
    color: '#659696',
    textAlign: 'center',
    marginTop: 20,
    fontWeight: '500',
  },
});