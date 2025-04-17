import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, TextInput, Alert,} from 'react-native';

export default function TelaInicial({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleEnviar = () => {
    if (nome.trim() === '' || email.trim() === '' || mensagem.trim() === '') {
      Alert.alert(
        "Atenção",
        "Por favor, preencha todos os campos antes de enviar.",
        [{ text: "OK" }]
      );
    } else {
      Alert.alert(
        "✅ Mensagem Enviada!",
        "Sua mensagem foi enviada com sucesso!\n\nEntraremos em contato em breve.",
        [{ text: "Fechar" }]
      );
      setNome('');
      setEmail('');
      setMensagem('');
    }
  };
  
  return (
    <ScrollView style={estilos.container}>
      <Text style={estilos.textoInicial}>Seja bem-vinda(o)! Este é um espaço seguro para cuidar da sua saúde emocional.</Text>

      <View style={estilos.containerAviso}>
        <View style={estilos.containerInterno}>
          <Text style={estilos.tituloContainer}>Lembre-se sempre !</Text>
          <Image style={estilos.iconeSuporte} source={require('../../assets/icone-suporte.png')}/>
        </View>
        <View style={estilos.containerTexto}>
          <Text style={estilos.textoContainer}>Você não está sozinho(a).</Text>
          <Text>Aqui você pode refletir, respirar e encontrar apoio emocional.</Text> 
        </View>
      </View>


      <View style={estilos.secaoExplicativa}>
        <Text style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold'}}>O que é <Text style={{color: '#659696'}}>Saúde Mental</Text> ? </Text>
        <Text style={{textAlign: 'center', fontSize: 16,  marginTop: 10}}>Trata-se do equilíbrio entre</Text>
        <View style={estilos.cards}>
          <View style={estilos.card}>
            <Image style={estilos.iconeCard} source={require('../../assets/icone-emocoes.png')}/>
            <Text style={{fontWeight: 'bold'}}>Emoções</Text>
          </View>

          <View style={estilos.card}>
            <Image style={estilos.iconeCard} source={require('../../assets/icone-pensamento.png')}/>
            <Text style={{fontWeight: 'bold'}}>Pensamentos</Text>
          </View>

          <View style={estilos.card}>
            <Image style={estilos.iconeCard} source={require('../../assets/icone-acao.png')}/>
            <Text style={{fontWeight: 'bold'}}>Ações</Text>
          </View>
        </View>
      </View>


        <View styles={estilos.secaoBeneficios}>

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
        </View>
        

        <View style={estilos.secaoConsulta}>
          <Text style={estilos.tituloConsulta}>Conheça nossa Central de <Text style={{color: '#659696'}}>Ajuda Psicológica</Text></Text>
          <Text style={estilos.textoConsulta}>Conectamos você a psicólogos especializados 
          de forma acessível e segura. Oferecemos suporte emocional personalizado, com sessões online.</Text>
          <TouchableOpacity
            style={estilos.botaoPrincipal}>
            <Text style={estilos.textoBotaoPrincipal}>Agendar Consulta</Text>
          </TouchableOpacity>
        </View>

        
          <View style={estilos.secaoFormulario}>
              <Text style={estilos.tituloFormulario}>Não deixe de nos contactar em caso de qualquer dúvida!</Text>
              <TextInput
                style={estilos.input}
                placeholder='Nome: '
                autoCapitalize='words'
                value={nome}
                onChangeText={setNome}
              />
              
              <TextInput
                style={estilos.input}
                placeholder='Email: '
                keyboardType='email-address'
                maxLength={25}
                value={email}
                onChangeText={setEmail}
              />
        
              <TextInput
                style={estilos.input2}
                placeholder='Mensagem: '
                autoCapitalize='words'
                value={mensagem}
                onChangeText={setMensagem}
              />
              
              <TouchableOpacity style={estilos.botao} onPress={handleEnviar}>
                <Text style={estilos.botaoTexto}>Enviar</Text>
              </TouchableOpacity>  
          </View>


          <View style={estilos.secaoServicos}>
          <Text style={estilos.fraseFinal}>Aproveite os serviços Mindly!</Text>

          <Image
            source={require('../../assets/logoazul.png')}
            style={estilos.iconeFinal}
          />
        </View>


        <View style={estilos.rodape}>
          <Image style={estilos.logoRodape} source={require('../../assets/Logo.jpg')}/>
          <Text style={{color: 'white', paddingLeft: 15, marginTop:20, fontWeight: 'bold'}}>Entre em contato conosco</Text>
          <Text style={{color: 'white', paddingLeft: 15, marginTop:5}}>ajudamindly@gmail.com</Text>
          <Text style={{color: 'white', paddingLeft: 15, marginTop:5}}>0800-1256</Text>
        </View>

    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container:{
    margin: 0,
  },
  textoInicial:{
    width: '90%',
    paddingLeft: 30,
    marginTop: 40,
    fontSize: 17,
    fontWeight: 'bold'
  },

  containerAviso:{
    width: 380,
    height: 150,
    backgroundColor: '#FFF7F7',
    elevation: 8,
    borderRadius: 10,
    marginLeft: 15,
    display: 'flex',
    marginTop: 30
  },
  tituloContainer:{
    fontSize: 18,
    color: '#659696',
    fontWeight: 'bold'
  },
  containerInterno:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 15,
    alignItems: 'center'
  },
  containerTexto:{
    paddingLeft: 20
  },
  textoContainer:{
    marginBottom: 5
  },
  iconeSuporte:{
    width: 50,
    height: 50
  },
  secaoExplicativa:{
    marginTop: 60,
    marginBottom: 90
  },
  cards:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 25
  },
  card:{
    height: 120,
    width: 100,
    backgroundColor: '#659696',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'center'
  },
  iconeCard:{ 
    width: 60,
    height:60
  },
  secaoConsulta:{
    marginTop: 150,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20
  },
  tituloConsulta:{
    fontSize: 18,
    width: '60%',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  textoConsulta:{
    fontSize: 15,
    width: '80%',
    textAlign: 'center'
  },
  secaoServicos:{
    marginTop: 80,
    marginBottom: 80
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
    marginBottom: 10,
    width: 250
  },
  textoBotaoPrincipal: {
    color: 'white',
    fontSize: 15
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
    fontSize: 18
  },
  negrito: {
    fontWeight: 'bold',
    fontSize: 18
  },
  listaServicos: {
    marginBottom: 20,
    paddingHorizontal: 10,
    alignItems: 'center'
  },
  itemServico: {
    fontSize: 15,
    color: '#333',
    marginBottom: 8
  },
  imagemApoio: {
    width: 270,
    height: 170,
    borderRadius: 6,
  },
  fraseFinal: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 16,
    color: '#333',
  },
  iconeFinal: {
    width: 80,
    height: 80,
    alignSelf: 'center',
  },
  input: {
    backgroundColor: '#B2CBCB',
    width: 300,
    borderRadius: 5, 
    padding: 15, 
    borderWidth: 3, 
    borderColor: '#B2CBCB',
    fontSize: 17,
    marginBottom: 20,
    alignSelf: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.50,
    shadowRadius: 8,
    elevation: 8
  },
  input2: {
    backgroundColor: '#B2CBCB',
    width: 300,
    height: 110,
    borderRadius: 5,
    padding: 15, 
    borderWidth: 3, 
    borderColor: '#B2CBCB',
    fontSize: 17,
    marginBottom: 20,
    alignSelf: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.50,
    shadowRadius: 8,
    elevation: 8,
    textAlignVertical: 'top', 
    alignItems: 'flex-start'
  },
  botao: {
    backgroundColor: '#B2CBCB',
    width: 130,
    height: 40,
    padding: 7,
    marginBottom: 20,
    alignSelf: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.50,
    shadowRadius: 8,
    elevation: 8,
    justifyContent:'center'
  },
  botaoTexto: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  secaoFormulario:{
    marginTop: 90,
    marginBottom: 50
  },
  tituloFormulario:{
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
    paddingLeft: 60,
    paddingRight:60,
    marginBottom: 20
  },
  rodape:{
    backgroundColor: '#659696',
    height: 200
  },
  logoRodape:{
    width: 150,
    height:60
  }
});
