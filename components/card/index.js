import {Text, View, Image} from 'react-native'

import Header from '../header';

import estilo from './style';

export default function Card({porcentagem,titulo,imagem,descricao}){

return(

< View style={estilo.cardTarefa}>

<Image style={estilo.imagemCard} source={{ uri:imagem }} />

<View style={{ marginLeft: 15,width:150 }}>

<Text style={estilo.tituloCard}>{titulo}</Text>

<Text style={estilo.textoCard}>{descricao}</Text>

</View>

<Text style={{ fontSize: 25 }}>{porcentagem}</Text>

</View>

);

}