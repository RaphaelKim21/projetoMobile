import { View, Text, Image, Linking, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const equipe = [
  {
    nome: 'Gabriela De Sousa Reis',
    rm: 'RM558830',
    imagem: require('../../assets/gabriela.png'),
    github: 'https://github.com/Gabriela-Reiss',
    linkedin: 'https://www.linkedin.com/in/dev-gabrielareis/',
  },
  {
    nome: 'Laura Amadeu Soares',
    rm: 'RM566690',
    imagem: require('../../assets/laura.png'),
    github: 'https://github.com/lauraamadeu5',
    linkedin: 'https://www.linkedin.com/in/laura-amadeu-0995a22b6/',
  },
  {
    nome: 'Raphael Lamaison Kim',
    rm: 'RM557914',
    imagem: require('../../assets/raphael.png'),
    github: 'https://github.com/RaphaelKim21',
    linkedin: 'https://www.linkedin.com/in/raphael-kim-48b26630b/',
  },
];

export default function TelaDicas() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Nossa Equipe</Text>

      {equipe.map((pessoa, index) => (
        <View
          key={index}
          style={[
            styles.card,
            index === 1 && { flexDirection: 'row-reverse' }, 
          ]}
        >
          <Image
            source={pessoa.imagem}
            style={[
              styles.imagem,
              index === 1
                ? { marginLeft: 15, marginRight: 0 } 
                : { marginRight: 15 }, 
            ]}
          />

          <View style={styles.info}>
            <Text style={styles.nome}>{pessoa.nome}</Text>
            <Text style={styles.rm}>{pessoa.rm}</Text>

            <View style={styles.icones}>
              <TouchableOpacity onPress={() => Linking.openURL(pessoa.github)}>
                <Image
                  source={require('../../assets/githubb.png')}
                  style={styles.icone}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL(pessoa.linkedin)}>
                <Image
                  source={require('../../assets/linkedinn.png')}
                  style={styles.icone}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5DA3A4',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    marginBottom: 25,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    minHeight: 160,
  },
  imagem: {
    width: 100,
    height: 152,
    borderRadius: 10,
  },
  info: {
    flex: 1,
    alignItems: 'center',
  },
  nome: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  rm: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  icones: {
    flexDirection: 'row',
    gap: 12,
  },
  icone: {
    width: 24,
    height: 24,
  },
});
