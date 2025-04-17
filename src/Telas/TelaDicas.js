import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TelaDicas() {
  

  // Estados para os checkboxes
  const [checklist, setChecklist] = useState({
    gratidao: false,
    autocrítica: false,
    pensamentosNegativos: false,
    rotinasSaudaveis: false,
    meditacao: false,
    atencaoCorpo: false,
    fontesEstresse: false,
    pausas: false,
    respiracao: false,
  });


  // Função para alternar o estado de um checkbox
  const toggleCheckbox = (key) => {
    setChecklist({ ...checklist, [key]: !checklist[key] });
  };

  useEffect(() => {
    const todosMarcados = Object.values(checklist).every(item => item === true);
    if (todosMarcados) {
      Alert.alert(
        "🎉 Parabéns!",
        "Você completou todas as tarefas do Check List Diário!\n\nContinue assim para manter seu bem-estar!",
        [{ text: "OK" }]
      );
    }
  }, [checklist]);

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
          <TouchableOpacity onPress={() => toggleCheckbox('gratidao')}>
            <Ionicons 
              name={checklist.gratidao ? "checkbox" : "checkbox-outline"} 
              size={24} 
              color={checklist.gratidao ? "#659696" : "#333"} 
            />
          </TouchableOpacity>
          <Text style={styles.checklistText}>
            <Text style={styles.boldText}>Pratique gratidão diária:</Text> Liste 3 coisas pelas quais você é grato todos os dias.
          </Text>
        </View>
        
        <View style={styles.checklistItem}>
          <TouchableOpacity onPress={() => toggleCheckbox('autocrítica')}>
            <Ionicons 
              name={checklist.autocrítica ? "checkbox" : "checkbox-outline"} 
              size={24} 
              color={checklist.autocrítica ? "#659696" : "#333"} 
            />
          </TouchableOpacity>
          <Text style={styles.checklistText}>
            <Text style={styles.boldText}>Evite o autocrítico excessivo:</Text> Seja gentil com você mesmo.
          </Text>
        </View>
        
        <View style={styles.checklistItem}>
          <TouchableOpacity onPress={() => toggleCheckbox('pensamentosNegativos')}>
            <Ionicons 
              name={checklist.pensamentosNegativos ? "checkbox" : "checkbox-outline"} 
              size={24} 
              color={checklist.pensamentosNegativos ? "#659696" : "#333"} 
            />
          </TouchableOpacity>
          <Text style={styles.checklistText}>
            <Text style={styles.boldText}>Desafie pensamentos negativos:</Text> Substitua por algo positivo.
          </Text>
        </View>
      </View>
      
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
          <TouchableOpacity onPress={() => toggleCheckbox('rotinasSaudaveis')}>
            <Ionicons 
              name={checklist.rotinasSaudaveis ? "checkbox" : "checkbox-outline"} 
              size={24} 
              color={checklist.rotinasSaudaveis ? "#659696" : "#333"} 
            />
          </TouchableOpacity>
          <Text style={styles.checklistText}>
            <Text style={styles.boldText}>Estabeleça rotinas saudáveis:</Text> Horários para dormir, comer e trabalhar.
          </Text>
        </View>
        
        <View style={styles.checklistItem}>
          <TouchableOpacity onPress={() => toggleCheckbox('meditacao')}>
            <Ionicons 
              name={checklist.meditacao ? "checkbox" : "checkbox-outline"} 
              size={24} 
              color={checklist.meditacao ? "#659696" : "#333"} 
            />
          </TouchableOpacity>
          <Text style={styles.checklistText}>
            <Text style={styles.boldText}>Pratique meditação ou mindfulness:</Text> Respire profundamente.
          </Text>
        </View>
        
        <View style={styles.checklistItem}>
          <TouchableOpacity onPress={() => toggleCheckbox('atencaoCorpo')}>
            <Ionicons 
              name={checklist.atencaoCorpo ? "checkbox" : "checkbox-outline"} 
              size={24} 
              color={checklist.atencaoCorpo ? "#659696" : "#333"} 
            />
          </TouchableOpacity>
          <Text style={styles.checklistText}>
            <Text style={styles.boldText}>Atenção ao corpo:</Text> Atividades físicas regularmente.
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
          <TouchableOpacity onPress={() => toggleCheckbox('fontesEstresse')}>
            <Ionicons 
              name={checklist.fontesEstresse ? "checkbox" : "checkbox-outline"} 
              size={24} 
              color={checklist.fontesEstresse ? "#659696" : "#333"} 
            />
          </TouchableOpacity>
          <Text style={styles.checklistText}>
            <Text style={styles.boldText}>Identifique fontes de estresse:</Text> Reconheça o que causa ansiedade.
          </Text>
        </View>
        
        <View style={styles.checklistItem}>
          <TouchableOpacity onPress={() => toggleCheckbox('pausas')}>
            <Ionicons 
              name={checklist.pausas ? "checkbox" : "checkbox-outline"} 
              size={24} 
              color={checklist.pausas ? "#659696" : "#333"} 
            />
          </TouchableOpacity>
          <Text style={styles.checklistText}>
            <Text style={styles.boldText}>Faça pausas:</Text> Pare para relaxar e reconectar.
          </Text>
        </View>
        
        <View style={styles.checklistItem}>
          <TouchableOpacity onPress={() => toggleCheckbox('respiracao')}>
            <Ionicons 
              name={checklist.respiracao ? "checkbox" : "checkbox-outline"} 
              size={24} 
              color={checklist.respiracao ? "#659696" : "#333"} 
            />
          </TouchableOpacity>
          <Text style={styles.checklistText}>
            <Text style={styles.boldText}>Pratique respiração profunda:</Text> Reduza o estresse.
          </Text>
        </View>
      </View>

      <View style={styles.divider} />
      <Text style={{ textAlign: 'center', fontSize: 16 }}>Não deixe de nos contactar em caso de qualquer dúvida!</Text>
      <View style={styles.divider} />


      
      <View style={styles.divider} />
    </ScrollView>
  );
}

// Estilos (mantidos iguais)
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
  }
});