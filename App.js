import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import Filme from './components/filmes';
 

export default function App() {

  return (
    <View style={styles.page}>
      <StatusBar/>
      <View style={styles.header}>
        <Text style={styles.titulo}>JEFFLIX</Text>
      </View>
    <Filme/>
    
    </View>
  );
}

const styles = StyleSheet.create({
  page:{
    flex:1,
    backgroundColor:'rgb(12, 12, 12)',
     },
  header:{
    backgroundColor:'rgb(0, 0, 0)',
    alignItems:'center'
  },
  titulo:{
    color:'red',
    fontSize:30,
    fontWeight:'bold'
  }
});

