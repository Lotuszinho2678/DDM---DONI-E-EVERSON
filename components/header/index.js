import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import estilo from './style.js'; // Importe seus estilos

export default function NavBar({ onHomePress, onSearchPress, onCartPress, onFilterNewPress, onFilterUsedPress }) {
    return (
        <View style={estilo.navBar}>
            {/* Logo */}
            <Image
                source={require('../../components/img/logoo.png')} // Caminho para a sua imagem
                style={estilo.logo}
            />
            {/* Botões de navegação */}
            <TouchableOpacity onPress={onHomePress} style={estilo.navItem}>
                <Text style={estilo.navText}>Início</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onSearchPress} style={estilo.navItem}>
                <Text style={estilo.navText}>Buscar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onCartPress} style={estilo.navItem}>
                <Text style={estilo.navText}>Carrinho</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onFilterNewPress} style={estilo.navItem}>
                <Text style={estilo.navText}>Novos</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onFilterUsedPress} style={estilo.navItem}>
                <Text style={estilo.navText}>Usados</Text>
            </TouchableOpacity>
        </View>
    );
}
