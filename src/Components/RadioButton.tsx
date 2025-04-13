import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function RadioButton({selected, onPress, label}){
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={[styles.radio, selected && styles.radioSelected]}/>
            <Text style={styles.label}>{label}</Text>
            
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 4
    },
    radio: {
      height: 20,
      width: 20,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#555',
      marginRight: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
    radioSelected: {
      backgroundColor: '#659696',
    },
    label: {
      fontSize: 16,
    }
  });