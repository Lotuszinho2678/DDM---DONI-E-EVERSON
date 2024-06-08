import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à Nossa Loja de Carros</Text>
      <Text style={styles.subtitle}>Encontre os melhores carros novos e usados para você</Text>
      <Button
        title="Ver Detalhes do Carro"
        onPress={() => navigation.navigate('CarDetails')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
});
