import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import '../Types/types';
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";
import RadioButton from '../Components/RadioButton'

const perguntas =[
  { id: 1, texto: "Gosto de experimentar coisas novas e diferentes.", categoria: "abertura" },
  { id: 2, texto: "Tenho interesse por arte, música ou literatura.", categoria: "abertura" },
  { id: 3, texto: "Eu sempre cumpro prazos e obrigações.", categoria: "consciencia" },
  { id: 4, texto: "Gosto de manter tudo organizado e planejar com antecedência.", categoria: "consciencia" },
  { id: 5, texto: "Me sinto energizada ao estar com outras pessoas.", categoria: "extroversao" },
  { id: 6, texto: "Sou falante e gosto de ser o centro das atenções.", categoria: "extroversao" },
  { id: 7, texto: "Me preocupo com o bem-estar das pessoas ao meu redor.", categoria: "amabilidade" },
  { id: 8, texto: "Tento evitar conflitos e ser gentil com os outros.", categoria: "amabilidade" },
  { id: 9, texto: "Fico estressada ou ansiosa com facilidade.", categoria: "neuroticismo" },
  { id: 10, texto: "Tenho variações de humor frequentes.", categoria: "neuroticismo" }
];

const opcoes =[
  { label: "Discordo Plenamente", value: 1 },
  { label: "Discordo", value: 2 },
  { label: "Neutro", value: 3 },
  { label: "Concordo", value: 4 },
  { label: "Concordo Plenamente", value: 5 }
];





export default function TelaTeste(){
    const[respostas,setRespostas] = useState({});
    /** @type {ResultadoPerfil | null} */
    const [resultado, setResultado] = useState(null);


    const handleChange=(id, value)=>{
        setRespostas({...respostas, [id]: value});
    };

    const handleSubmit = async()=>{
        if(Object.keys(respostas). length < perguntas.length){
            Alert.alert("Por favor, responda todas as perguntas.");
        };

        const respostasFormatadas = perguntas.map((pergunta)=>({
            categoria: pergunta.categoria,
            valor: Number(respostas[pergunta.id])
        }));


        try{
            const response = await axios.post("http://10.0.2.2:5000/avaliar", {respostas: respostasFormatadas} );
            setResultado(response.data.perfil_ordenado);
            setRespostas({});
        }catch(error){
            console.log("Erro na requisição: ", error)
        }
    };

    return(
        <ScrollView style={styles.container}>
            <Text style={styles.titulo}>Teste Mindly</Text>
            <View style={styles.conteudContainer}>
                <Text style={styles.textConteud}>O teste Mindly é baseado no modelo Big Five.</Text>
                <Text style={styles.textConteud}>Caracterizamos sua personalidade de acordo com cinco traços: Extroversão, Amabilidade, Neuroticismo, Consciência e Abertura à Experiências. </Text>
            </View>
            <Text style={styles.textSection}>Responda as perguntas e obtenha seu resultado Mindly </Text>

            {perguntas.map((pergunta)=>(
                <View key={pergunta.id} style={{marginBottom: 20}}>
                    <Text style={styles.textQuestions}>{pergunta.texto}</Text>
                    {opcoes.map((opcao) => (
                        <RadioButton
                            key={opcao.value}
                            label={opcao.label}
                            selected={respostas[pergunta.id] === opcao.value}
                            onPress={() => handleChange(pergunta.id, opcao.value)}
                        />
                        ))}

                </View>
            ))}
            <TouchableOpacity style={styles.botao}  onPress={handleSubmit}>
                <Text style={styles.botaoTexto}>Enviar respostas</Text>
            </TouchableOpacity>
            {resultado && (
                <View style={styles.resultadoContainer}>
                    <Text style={styles.resultadoTitulo}>Perfil Mindly</Text>
                    {Object.entries(resultado)
                    .sort((a, b) => b[1].pontuacao - a[1].pontuacao) // ordena do menor para o maior
                    .map(([personalidade, dados]) => (
                  <View key={personalidade} style={styles.resultadoItem}>
                          <Text style={styles.resultadoTexto}>
                            <Text style={styles.resultadoNegrito}>{personalidade.toUpperCase()}</Text>
                          </Text>
                          <Text style={styles.resultadoTexto}>Pontuação: {dados.pontuacao}%</Text>
                          <Text style={styles.resultadoTexto}>{dados.interpretacao}</Text>
                          <Text style={styles.resultadoTextoDica}>Praticar: {dados.dica}</Text>
                      </View>
                      ))}

            </View>
            )}
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container:{
        padding: 15
    },
    titulo:{
        textAlign:'center',
        marginTop:8,
        marginBottom: 30,
        fontSize: 24,
        color: '#659696',
        fontWeight: 'bold'
    },

    conteudContainer:{
        width: 380,
        height: 150,
        backgroundColor: '#FFF7F7',
        elevation: 8,
        borderRadius: 10,
        marginBottom: 50,
        display: 'flex',
        flexDirection: 'column',
        gap: 10
    },
    textConteud:{
        width: '100%',
        marginTop: 10,
        textAlign: 'justify',
        paddingLeft: 10,
        paddingRight: 15,
        fontSize: 16
    },
    
    textSection:{
      marginBottom: 50,
      fontSize: 18,
      textAlign: 'center',
      fontWeight: 'bold'
    },
    textQuestions:{
      marginBottom: 8,
      fontSize: 18

    },
    resultadoItem: {
      backgroundColor: "#f1f1f1",
      padding: 12,
      borderRadius: 8,
      marginBottom: 16,
      elevation: 2,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    resultadoTexto: {
      fontSize: 16,
      marginBottom: 4,
    },
    resultadoNegrito: {
      fontWeight: "bold",
    },  
    title: {
      fontSize: 22,
      fontWeight: "bold",
      marginBottom: 16,
      textAlign: "center"
    },
    perguntaContainer: {
      marginBottom: 20
    },
    pergunta: {
      fontSize: 16,
      marginBottom: 8
    },
    opcoesContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 8
    },
    opcao: {
      padding: 10,
      backgroundColor: "#e0e0e0",
      borderRadius: 6,
      marginRight: 8,
      marginBottom: 8
    },
    opcaoSelecionada: {
      backgroundColor: "#2196f3"
    },
    opcaoTexto: {
      color: "#000"
    },
    botao: {
      backgroundColor: "#659696",
      padding: 12,
      borderRadius: 8,
      alignItems: "center",
      marginTop: 10,
      marginBottom: 50
    },
    botaoTexto: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold"
    },
    resultadoContainer: {
      marginTop: 30
    },
    resultadoTitulo: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 12
    },
    resultadoTextoDica:{
      fontSize: 16,
      marginBottom: 4,
      fontWeight: 'bold'
    },
    resultadoBox: {
      backgroundColor: "#f1f1f1",
      padding: 12,
      borderRadius: 8,
      marginBottom: 12
    },
    resultadoCategoria: {
      fontWeight: "bold",
      fontSize: 16,
      marginBottom: 6
    },
    bold: {
      fontWeight: "bold"
    }
  });
  