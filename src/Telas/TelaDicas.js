import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView,TextInput, TouchableOpacity, Alert} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TelaDicas() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
  
    const handleEnviar = () => {
      if (nome.trim() === '' || email.trim() === '' || mensagem.trim() === '') {
        Alert.alert(
          "Atenção",
          "Por favor, preencha todos os campos antes de enviar.",
          [
            { text: "OK" }
          ]
        );
      } else {
        Alert.alert(
          "✅ Mensagem Enviada!",
          "Sua mensagem foi enviada com sucesso!\n\nEntraremos em contato em breve.",
          [
            { text: "Fechar" }
          ]
        );
        // Limpa os campos após o envio (opcional)
        setNome('');
        setEmail('');
        setMensagem('');
      }
    };


  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Dicas para seu bem-estar</Text>
      <Text style={styles.subtitle}>Siga nossas dicas e complete seu Check List <Text style={styles.subtitleBold}>Diário!</Text></Text>
      
      
      <View style={styles.bloco}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.owlImage}
          source={require('../../assets/coruja1.jpg')}
          resizeMode="contain"
        />
      </View>
      
      {/* Seção 1 - Pensamento Positivo */}
      <Text style={styles.sectionTitle}>Pensamento Positivo e Gratidão</Text>
      
      <View style={styles.checklistItem}>
        <Ionicons name="checkmark-outline" size={24} />
        <Text style={styles.checklistText}>
          <Text style={styles.boldText}>Pratique gratidão diária:</Text> Liste 3 coisas pelas quais você é grato todos os dias.
        </Text>
      </View>
      
      <View style={styles.checklistItem}>
        <Ionicons name="checkmark-outline" size={24} />
        <Text style={styles.checklistText}>
          <Text style={styles.boldText}>Evite o autocrítico excessivo:</Text> Seja gentil com você mesmo. Aprenda a aceitar seus erros e fracassos.
        </Text>
      </View>
      
      <View style={styles.checklistItem}>
        <Ionicons name="checkmark-outline" size={24} />
        <Text style={styles.checklistText}>
          <Text style={styles.boldText}>Desafie pensamentos negativos:</Text> ao perceber um pensamento negativo, tente substituir por algo mais positivo.
        </Text>
      </View>
      </View>
      
      {/* Divisor entre seções */}
      <View style={styles.divider} />

      

    <View style={styles.bloco}>
      <View style={[styles.imageContainer, styles.secondImageContainer]}>
        <Image
          style={styles.owlImage}
          source={require('../../assets/coruja2.jpg')}
          resizeMode="contain"
        />
      </View>

      {/* Seção 2 - Autocuidado */}
      <Text style={styles.sectionTitle}>Autocuidado e Equilíbrio Pessoal</Text>
      
      <View style={styles.checklistItem}>
        <Ionicons name="checkmark" size={24} />
        <Text style={styles.checklistText}>
          <Text style={styles.boldText}>Estabeleça rotinas saudáveis:</Text> Crie horários regulares para dormir, comer e trabalhar.
        </Text>
      </View>
      
      <View style={styles.checklistItem}>
        <Ionicons name="checkmark" size={24} />
        <Text style={styles.checklistText}>
          <Text style={styles.boldText}>Pratique a meditação ou mindfulness:</Text> Dedique alguns minutos por dia para estar presente no momento e respirar profundamente.
        </Text>
      </View>
      
      <View style={styles.checklistItem}>
        <Ionicons name="checkmark" size={24} />
        <Text style={styles.checklistText}>
          <Text style={styles.boldText}>Atenção ao corpo:</Text> Pratique atividades físicas regularmente, mesmo que simples caminhadas.
        </Text>
      </View>
      </View>

      <View style={styles.divider} />


      <View style={styles.bloco}>
      <View style={[styles.imageContainer, styles.secondImageContainer]}>
        <Image
          style={styles.owlImage}
          source={require('../../assets/coruja3.jpg')}
          resizeMode="contain"
        />
      </View>

      {/* Seção 3 - Estresse */}
      <Text style={styles.sectionTitle}>Gestão do Estresse</Text>
      
      <View style={styles.checklistItem}>
        <Ionicons name="checkmark" size={24} />
        <Text style={styles.checklistText}>
          <Text style={styles.boldText}>Identifique fontes de estresse:</Text> Reconheça o que causa ansiedade e estresse em sua vida.
        </Text>
      </View>
      
      <View style={styles.checklistItem}>
        <Ionicons name="checkmark" size={24} />
        <Text style={styles.checklistText}>
          <Text style={styles.boldText}>Faça pausas:</Text> Se você está sobrecarregado, pare por alguns minutos para relaxar e reconectar.
        </Text>
      </View>
      
      <View style={styles.checklistItem}>
        <Ionicons name="checkmark" size={24} />
        <Text style={styles.checklistText}>
          <Text style={styles.boldText}>Pratique respiração profunda:</Text> Pratique técnicas simples, como respiração abdominal, para reduzir o estresse.
        </Text>
      </View>
      </View>

      <View style={styles.divider} />

      <Text style={{textAlign:'center', fontSize:16}}>Não deixe de nos contactar em caso de qualquer dúvida!</Text>

      <View style={styles.divider} />

      
      <TextInput
        style={styles.input}
        placeholder='Nome: '
        autoCapitalize='words'
        value={nome}
        onChangeText={setNome}
      />
      
      <TextInput
        style={styles.input}
        placeholder='Email: '
        keyboardType='email-address'
        maxLength={25}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input2}
        placeholder='Mensagem: '
        autoCapitalize='words'
        value={mensagem}
        onChangeText={setMensagem}
      />
      
      <TouchableOpacity style={styles.botao} onPress={handleEnviar}>
        <Text style={styles.botaoTexto}>Enviar</Text>
      </TouchableOpacity>

    <View style={styles.divider} />
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 15,
  },
  secondImageContainer: {
    marginTop: 5,  
    marginBottom: 10,  
  },
  owlImage: {
    width: 120,
    height: 120,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#659696',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitleBold: {
    fontWeight: 'bold',
  },
  divider: {
    height: 8,
    marginVertical: 28,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 15,
    textAlign: 'center'
  },
  checklistItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  checklistText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
    marginTop: 2,
  },
  boldText: {
    fontWeight: 'bold',
    
  },
  bloco: {
    borderWidth: 3,
    borderRadius: 15,
    borderColor: '#F8F2F2',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.50,
    shadowRadius: 8,
    elevation: 8,
    backgroundColor: '#F8F2F2'
  },
  input: {
    backgroundColor: '#B2CBCB',
    width: 300,
    borderRadius: 15, 
    padding: 15, 
    borderWidth: 3, 
    borderColor: '#B2CBCB',
    fontSize: 18,
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
    borderRadius: 15,
    padding: 15, 
    borderWidth: 3, 
    borderColor: '#B2CBCB',
    fontSize: 18,
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
    borderRadius: 15,
    padding: 7,
    borderWidth: 3,
    borderColor: '#B2CBCB',
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
    textAlign: 'center'
  }
});