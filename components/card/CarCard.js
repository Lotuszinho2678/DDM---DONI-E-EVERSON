import React from 'react';
import { View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import styles from './style'; // Importe os estilos

const CarCard = ({ car, onPress }) => {
  const [modalVisible, setModalVisible] = React.useState(false);

  const handleImagePress = () => {
    setModalVisible(true);
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
      <TouchableOpacity onPress={handleImagePress}>
        <Image source={{ uri: car.imagem }} style={styles.carImage} />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.carName}>{car.marca} {car.modelo}</Text>
        <Text>
          <Text style={styles.carLabel}>Ano: </Text>
          <Text style={styles.carYear}>{car.ano}</Text>
        </Text>

        <View style={{ height: 5 }} />

        <Text>
          <Text style={styles.carLabel}>Tipo: </Text>
          <Text style={styles.carType}>{car.tipo}</Text>
        </Text>

        <View style={{ height: 5 }} />

        <Text>
          <Text style={styles.carLabel}>Preço: </Text>
          <Text style={styles.carPrice}>R$ {car.preco}</Text>
        </Text>

        <View style={{ height: 5 }} />

        <Text>
          <Text style={styles.carLabel}>Quilometragem: </Text>
          <Text style={styles.carType}>{car.quilometragem} km</Text>
        </Text>

        <View style={{ height: 5 }} />

        <Text>
          <Text style={styles.carLabel}>Descrição: </Text>
          <Text style={styles.carDescription}>{car.descricao}</Text>
        </Text>

      </View>
      <Modal visible={modalVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <Image source={{ uri: car.imagem }} style={styles.modalImage} />
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={styles.closeButton}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </TouchableOpacity>
  );
};

export default CarCard;
