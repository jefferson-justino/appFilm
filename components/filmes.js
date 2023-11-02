import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image,TouchableOpacity,Modal } from 'react-native';

    export default function Filme(){
        const [ver,setDesver] =useState(false)
        const [dado,setDado] =useState('vazio')
        const [lista, setLista] =useState([{
            titulo:'Vingadores', 
            imagem:'https://br.web.img2.acsta.net/medias/nmedia/18/89/43/82/20052140.jpg', 
            descricao:'Loki (Tom Hiddleston) retorna à Terra enviado pelos chitauri, uma raça alienígena que pretende dominar os humanos. Com a promessa de que será o soberano do planeta, ele rouba o cubo cósmico dentro de instalações da S.H.I.E.L.D. e, com isso, adquire grandes poderes. Loki os usa para controlar o dr. Erik Selvig (Stellan Skarsgard) e Clint Barton/Gavião Arqueiro (Jeremy Renner), que passam a trabalhar para ele. No intuito de contê-los, Nick Fury (Samuel L. Jackson) convoca um grupo de pessoas com grandes habilidades, mas que jamais haviam trabalhado juntas: Tony Stark/Homem de Ferro (Robert Downey Jr.), Steve Rogers/Capitão América (Chris Evans), Thor (Chris Hemsworth), Bruce Banner/Hulk (Mark Ruffalo) e Natasha Romanoff/Viúva Negra (Scarlett Johansson). Só que, apesar do grande perigo que a Terra corre, não é tão simples assim conter o ego e os interesses de cada um deles para que possam agir em grupo.'
            },{
                titulo:'Peaky Blinders', 
                imagem:'https://www.formulatv.com/images/series/posters/1000/1079/dest_1.jpg', 
                descricao:'Uma notória gangue da Inglaterra de 1919 ascende no submundo liderada pelo cruel Tommy Shelby, um criminoso disposto a subir na vida a qualquer preço.'
            }
            ,{
                titulo:'Joker', 
                imagem:'https://play-lh.googleusercontent.com/sWZZ29UToaekhEk1UVQKS8NylEnnn3cz0s0GSUhN1t8p0oBzb2ptlwXpkikPitR9UqHS5QB9_PiLJqQiCqU', 
                descricao:'Isolado, intimidado e desconsiderado pela sociedade, o fracassado comediante Arthur Fleck inicia seu caminho como uma mente criminosa após assassinar três homens em pleno metrô. Sua ação inicia um movimento popular contra a elite de Gotham City, da qual Thomas Wayne é seu maior representante.'
            },
            {
                titulo:'Homem-Aranha: Através do Aranhaverso', 
                imagem:'https://m.media-amazon.com/images/S/pv-target-images/d595b08c999ad503ed6605b81e9cb5926d0f3f979e6150664aefec216e444aef.jpg', 
                descricao:'Depois de se reunir com Gwen Stacy, Homem-Aranha é jogado no multiverso, onde ele encontra uma equipe encarregada de proteger sua própria existência.'
            }
        ])
        
      return(

    
        <FlatList data={lista}  keyExtractor={item => item.id} renderItem={({item})=>(
          <View style={styles.conteiner} >
              <Text style={styles.tituloFilm} >{item.titulo}</Text>
              <Image  style={styles.img} source={{ uri: item.imagem, }}/>
              <TouchableOpacity style={styles.botao} onPress={()=>{setDesver(true), setDado(item.descricao) }} >
                <Text style={styles.textBot} >SAIBA MAIS</Text>
              </TouchableOpacity>
              <Modal  animationType="slide"
                      visible={ver}
                      transparent={true}
              >
            <View style={styles.tamModal}>
                <View style={styles.centralModal}> 
                <TouchableOpacity style={styles.botaoModal} onPress={()=>setDesver(false)}>
                    <Text style={styles.modalTextBot}>Voltar</Text>
                </TouchableOpacity>
                <Text style={styles.desc}>{dado}</Text>
                
                </View>
            </View>
        </Modal>
          </View>
        )}/>
    
      )
    }
    
const styles = StyleSheet.create({
    page:{
       paddingTop:50,
       },
    conteiner:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    img: {
      width: 400,
      height: 400,
      marginBottom:10,
      marginTop:10,
      borderRadius:20
    },
    tituloFilm:{
      fontSize:30,
      fontWeight:'bold',
      color:'white'
    },
   botao:{
    backgroundColor: 'red',
    paddingLeft:100,
    paddingRight:100,
    borderRadius:20,
    marginBottom:15
   },
   textBot:{
    color:'white',
    fontWeight:'bold',
    fontSize:25,
   }, 
    centralModal: {
    margin: 20,
    backgroundColor:'rgb(12, 12, 12)',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    
  },
  tamModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
   
  },
  desc:{
    color:'white'
  },
  modalTextBot:{
    color:'white',
    fontSize:20,
    fontWeight:"bold"
  },
  botaoModal:{
    backgroundColor:'red',
    borderRadius:10,
    marginBottom:5,
    paddingLeft:100,
    paddingRight:100
  }
  });