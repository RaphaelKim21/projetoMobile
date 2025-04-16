import { LinearGradient } from 'expo-linear-gradient';
import React, { useRef, useState } from 'react';
import {Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View,} from 'react-native';

export default function TelaChat({ navigation }) {
  const scrollViewRef = useRef(null);
  const [mensagens, setMensagens] = useState([]);
  const [novaMensagem, setNovaMensagem] = useState('');

  const enviarMensagem = () => {
    if (novaMensagem.trim() === '') return;

    const horario = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

    const mensagemUsuario = (
      <View
        key={Date.now()}
        style={[estilos.mensagemContainer, estilos.mensagemUsuario]}
      >
        <Image
          style={estilos.avatarPlaceholder}
          source={require('../../assets/cadastro 1.png')}
        />
        <View style={[estilos.balaoMensagem, estilos.balaoUsuario]}>
          <Text style={estilos.nomeUsuario}>Você</Text>
          <Text style={estilos.textoMensagem}>{novaMensagem}</Text>
          <Text style={estilos.horaMensagem}>{horario}</Text>
        </View>
      </View>
    );

    setMensagens((prev) => [...prev, mensagemUsuario]);
    setNovaMensagem('');

    setTimeout(() => {
      const resposta = (
        <View
          key={Date.now() + 1}
          style={[estilos.mensagemContainer, estilos.mensagemPsicologo]}
        >
          <View style={estilos.avatarPlaceholder} />
          <View style={[estilos.balaoMensagem, estilos.balaoPsicologo]}>
            <Text style={[estilos.nomeUsuario, { color: 'white' }]}>Psicólogo</Text>
            <Text style={[estilos.textoMensagem, { color: 'white' }]}>
              Obrigado por se abrir conosco. Logo um psicólogo vai te responder.
            </Text>
            <Text style={[estilos.horaMensagem, { color: '#e0e0e0' }]}>
              {new Date().toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </Text>
          </View>
        </View>
      );

      setMensagens((prev) => [...prev, resposta]);
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 1500); // resposta após 1.5 segundos

    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 100);
  };

  return (
    <View style={estilos.container}>
      <LinearGradient
        colors={['#659696', '#8fb3b3']}
        style={estilos.gradienteCabecalho}
      >
        <Text style={estilos.tituloChat}>Chat de Apoio Anônimo</Text>
      </LinearGradient>

      <ScrollView style={estilos.areaMensagens} ref={scrollViewRef}>
        {/* Mensagens fixas */}
        <View style={[estilos.mensagemContainer, estilos.mensagemUsuario]}>
          <Image
            style={estilos.avatarPlaceholder}
            source={require('../../assets/cadastro 1.png')}
          />
          <View style={[estilos.balaoMensagem, estilos.balaoUsuario]}>
            <Text style={estilos.nomeUsuario}>Anônimo</Text>
            <Text style={estilos.textoMensagem}>
              Ultimamente tenho me sentido muito sozinho, mesmo cercado de pessoas...
            </Text>
            <Text style={estilos.horaMensagem}>10:30</Text>
          </View>
        </View>

        <View style={[estilos.mensagemContainer, estilos.mensagemPsicologo]}>
          <View style={estilos.avatarPlaceholder} />
          <View style={[estilos.balaoMensagem, estilos.balaoPsicologo]}>
            <Text style={[estilos.nomeUsuario, { color: 'white' }]}>Psicólogo</Text>
            <Text style={[estilos.textoMensagem, { color: 'white' }]}>
              É comum nos sentirmos assim. Podemos trabalhar juntos para entender melhor esses sentimentos.
            </Text>
            <Text style={[estilos.horaMensagem, { color: '#e0e0e0' }]}>10:35</Text>
          </View>
        </View>

        <View style={[estilos.mensagemContainer, estilos.mensagemUsuario]}>
          <Image
            style={estilos.avatarPlaceholder}
            source={require('../../assets/cadastro 1.png')}
          />
          <View style={[estilos.balaoMensagem, estilos.balaoUsuario]}>
            <Text style={estilos.nomeUsuario}>Anônimo</Text>
            <Text style={estilos.textoMensagem}>
              Como faço para lidar com a ansiedade antes de dormir?
            </Text>
            <Text style={estilos.horaMensagem}>11:02</Text>
          </View>
        </View>

        <View style={[estilos.mensagemContainer, estilos.mensagemPsicologo]}>
          <View style={estilos.avatarPlaceholder} />
          <View style={[estilos.balaoMensagem, estilos.balaoPsicologo]}>
            <Text style={[estilos.nomeUsuario, { color: 'white' }]}>Psicólogo</Text>
            <Text style={[estilos.textoMensagem, { color: 'white' }]}>
              Recomendo exercícios de respiração e tentar estabelecer uma rotina relaxante antes de dormir.
            </Text>
            <Text style={[estilos.horaMensagem, { color: '#e0e0e0' }]}>11:10</Text>
          </View>
        </View>

        {/* Mensagens dinâmicas */}
        {mensagens.map((m) => m)}
      </ScrollView>

      {/* Footer de envio */}
      <View style={estilos.footer}>
        <TextInput
          style={estilos.inputMensagem}
          placeholder="Digite sua mensagem..."
          placeholderTextColor="#999"
          value={novaMensagem}
          onChangeText={setNovaMensagem}
        />
        <TouchableOpacity style={estilos.botaoEnviar} onPress={enviarMensagem}>
          <Text style={estilos.textoBotao}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// estilos (sem alterações)


const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  gradienteCabecalho: {
    width: '100%',
  },
  tituloChat: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
  },
  areaMensagens: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  mensagemContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'flex-start',
  },
  mensagemUsuario: {
    justifyContent: 'flex-start',
  },
  mensagemPsicologo: {
    justifyContent: 'flex-end',
  },
  avatarPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
    marginRight: 10,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  balaoMensagem: {
    maxWidth: '75%',
    padding: 12,
    borderRadius: 15,
    marginBottom: 5,
  },
  balaoUsuario: {
    backgroundColor: '#bdbebd',
    borderTopLeftRadius: 0,
  },
  balaoPsicologo: {
    backgroundColor: '#659696',
    borderTopRightRadius: 0,
  },
  nomeUsuario: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 5,
    color: '#333',
  },
  textoMensagem: {
    fontSize: 15,
    lineHeight: 20,
    color: '#333',
  },
  horaMensagem: {
    fontSize: 11,
    color: '#666',
    marginTop: 5,
    alignSelf: 'flex-end',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  inputMensagem: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
    fontSize: 16,
    maxHeight: 100,
  },
  botaoEnviar: {
    backgroundColor: '#659696',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
  },
});
