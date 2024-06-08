import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

export default function CarDetailsPage({ route }) {
  const { car } = route.params;
  const [modalVisible, setModalVisible] = useState(false);

  const handleImagePress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleImagePress}>
        <Image source={{ uri: car.imagem }} style={styles.carImage} />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.carName}>{car.marca} {car.modelo}</Text>
        <Text>
          <Text style={styles.carLabel}>Ano: </Text>
          <Text style={styles.carYear}>{car.ano}</Text>
        </Text>
        <Text>
          <Text style={styles.carLabel}>Tipo: </Text>
          <Text style={styles.carType}>{car.tipo}</Text>
        </Text>
        <Text>
          <Text style={styles.carLabel}>Preço: </Text>
          <Text style={styles.carPrice}>R$ {car.preco}</Text>
        </Text>
        <Text>
          <Text style={styles.carLabel}>Quilometragem: </Text>
          <Text style={styles.carKilometers}>{car.quilometragem} km</Text>
        </Text>
        <Text>
          <Text style={styles.carLabel}>Descrição: </Text>
          <Text style={styles.carDescription}>{car.descricao}</Text>
        </Text>
      </View>

      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={handleCloseModal}
      >
        <TouchableWithoutFeedback onPress={handleCloseModal}>
          <View style={styles.modalContainer}>
            <Image source={{ uri: car.imagem }} style={styles.modalImage} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  carImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: '#e0e0e0',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  textContainer: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  carName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  carLabel: {
    fontWeight: 'bold',
    color: '#555',
  },
  carYear: {
    fontSize: 16,
    color: '#191970',
  },
  carDescription: {
    fontSize: 16,
    color: '#333',
  },
  carPrice: {
    fontSize: 16,
    color: '#228B22',
  },
  carType: {
    fontSize: 16,
    color: '#DC143C',
  },
  carKilometers: {
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalImage: {
    width: '90%',
    height: '80%',
    resizeMode: 'contain',
    borderRadius: 10,
  },
});
