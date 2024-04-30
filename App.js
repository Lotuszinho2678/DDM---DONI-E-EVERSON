import React from 'react';
import { View, FlatList } from 'react-native';
import Header from './components/Header';
import CarCard from './components/card/CarCard';
import carros from './data/data.js';

const App = () => {
  // Função para renderizar cada item da lista de carros
  const renderCarItem = ({ item }) => <CarCard car={item} />;

  return (    
    //<View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 1 }}> 
      <Header />
      <FlatList
        data={carros}
        keyExtractor={(item) => item.id}
        renderItem={renderCarItem}
        numColumns={4} // Defina o número de colunas como 3
      />
    </View>
  );
};

export default App;
