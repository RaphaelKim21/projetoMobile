import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CabecalhoHeader from './src/Components/CabecalhoHeader';
import TelaAnsiedade from './src/Telas/Telaansiedade';
import TelaChat from './src/Telas/Telachat';
import TelaInicial from './src/Telas/Telainicial';
import TelaDicas from "./src/Telas/TelaDicas";
import TelaEquipe from "./src/Telas/TelaEquipe";
import TelaTeste from './src/Telas/TelaTeste';
import { useFonts } from 'expo-font';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();




function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} style={styles.drawerContainer}>
      <View style={styles.drawerHeader}>
        <Ionicons name="person-circle" size={80} color="#659696" />
        <Text style={styles.drawerTitle}>Central de Ajuda</Text>
      </View>

      <DrawerItem
        label="Início"
        icon={({ color }) => (
          <Ionicons name="home" size={24} color={color} style={{ marginRight: 10 }} />
        )}
        onPress={() => props.navigation.navigate('Main', { screen: 'TelaInicial' })}
        labelStyle={styles.drawerLabel}
        style={styles.drawerItem}
      />

      <DrawerItem
        label="Sinais de Ansiedade"
        icon={({ color }) => (
          <Ionicons name="alert-circle" size={24} color={color} style={{ marginRight: 10 }} />
        )}
        onPress={() => props.navigation.navigate('Main', { screen: 'TelaAnsiedade' })}
        labelStyle={styles.drawerLabel}
        style={styles.drawerItem}
      />

      <DrawerItem
        label="Dicas de Saúde Mental"
        icon={({ color }) => (
          <Ionicons name="bulb" size={24} color={color} style={{ marginRight: 10 }} />
        )}
        onPress={() => props.navigation.navigate('Main', { screen: 'TelaDicas' })}
        labelStyle={styles.drawerLabel}
        style={styles.drawerItem}
      />

      <DrawerItem
        label="Chat de Apoio"
        icon={({ color }) => (
          <Ionicons name="chatbubbles" size={24} color={color} style={{ marginRight: 10 }} />
        )}
        onPress={() => props.navigation.navigate('Main', { screen: 'TelaChat' })}
        labelStyle={styles.drawerLabel}
        style={styles.drawerItem}
      />

      <DrawerItem
        label="Nossa Equipe"
        icon={({ color }) => (
          <Ionicons name="people" size={24} color={color} style={{ marginRight: 10 }} />
        )}
        onPress={() => props.navigation.navigate('Main', { screen: 'TelaEquipe' })}
        labelStyle={styles.drawerLabel}
        style={styles.drawerItem}
      />


      <DrawerItem
        label="Teste Mindly"
        icon={({ color }) => (
          <Ionicons name="heart-half-outline" size={24} color={color} style={{ marginRight: 10 }} />
        )}
        onPress={() => props.navigation.navigate('Main', { screen: 'TelaTeste' })}
        labelStyle={styles.drawerLabel}
        style={styles.drawerItem}
      />




      <View style={styles.divider} />

      <DrawerItem
        label="Configurações"
        icon={({ color }) => (
          <Ionicons name="settings" size={24} color={color} style={{ marginRight: 10 }} />
        )}
        onPress={() => console.log("Configurações")}
        labelStyle={styles.drawerLabel}
        style={styles.drawerItem}
      />
    </DrawerContentScrollView>
  );
}

// Navegação Stack principal
function MainStack() {
  return (
    <Stack.Navigator screenOptions={{
      header: (props) => <CabecalhoHeader {...props} />,
      headerShown: true
    }}>
      <Stack.Screen name="TelaInicial" component={TelaInicial} />
      <Stack.Screen name="TelaAnsiedade" component={TelaAnsiedade} />
      <Stack.Screen name="TelaDicas" component={TelaDicas} />
      <Stack.Screen name="TelaChat" component={TelaChat} />
      <Stack.Screen name="TelaEquipe" component={TelaEquipe} />
      <Stack.Screen name='TelaTeste' component={TelaTeste}/>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerActiveBackgroundColor: '#e8f4f4',
          drawerActiveTintColor: '#659696',
          drawerInactiveTintColor: '#555',
          drawerStyle: {
            backgroundColor: '#f8fbfb',
            width: 280,
          },
          headerShown: false,
        }}
      >
        <Drawer.Screen
          name="Main"
          component={MainStack}
          options={{
            title: 'Menu Principal',
            drawerIcon: ({ color }) => (
              <Ionicons name="apps" size={24} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  drawerContainer: {
    backgroundColor: '#f8fbfb',
  },
  drawerHeader: {
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0ecec',
  },
  drawerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#659696',
    marginTop: 10,
  },
  drawerLabel: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: -16,
  },
  drawerItem: {
    marginVertical: 4,
    borderRadius: 8
  },
  divider: {
    height: 1,
    backgroundColor: '#e0ecec',
    marginVertical: 15,
    marginHorizontal: 15,
  },
});