import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback, Modal, Animated } from 'react-native';

const WeekRoutine = () => {
  const [pressedDay, setPressedDay] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [shadow, setShadow] = useState(new Animated.Value(0));

  const handlePress = (day) => {
    setPressedDay(day.name === pressedDay ? null : day.name);
  };

  const handleImagePress = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const startShadowAnimation = () => {
    Animated.timing(shadow, {
      toValue: 10,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const endShadowAnimation = () => {
    Animated.timing(shadow, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  return (
    <TouchableWithoutFeedback onPress={() => setPressedDay(null)}>
      <View style={styles.container}>
        <View style={styles.tableRow}>
          <View style={styles.tableCell}>
            <Text style={styles.tableHeader}>Dia</Text>
          </View>
          <View style={styles.tableCell}>
            <Text style={styles.tableHeader}>Imagem</Text>
          </View>
          <View style={styles.tableCell}>
            <Text style={styles.tableHeader}>Tarefa</Text>
          </View>
          <View style={styles.tableCell}>
            <Text style={styles.tableHeader}>Tempo</Text>
          </View>
        </View>
        <View style={styles.separator} />
        {daysOfWeek.map((day) => (
          <TouchableWithoutFeedback
            key={day.name}
            onPress={() => handlePress(day)}
            onPressIn={() => startShadowAnimation()}
            onPressOut={() => endShadowAnimation()}
          >
            <Animated.View
              style={[
                styles.tableRow,
                { backgroundColor: day.name === pressedDay ? '#f0f0f0' : 'transparent' },
                { elevation: shadow },
              ]}
            >
              <View style={styles.tableCell}>
                <Text style={[styles.dayText, { opacity: day.name === pressedDay ? 0.7 : 1 }]}>
                  {day.name}
                </Text>
              </View>
              <TouchableWithoutFeedback onPress={() => handleImagePress(day.image)}>
                <View style={styles.tableCell}>
                  <Image source={{ uri: day.image }} style={styles.image} />
                </View>
              </TouchableWithoutFeedback>
              <View style={styles.tableCell}>
                <Text style={styles.taskText}>{day.task}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.timeText}>{day.time}</Text>
              </View>
            </Animated.View>
          </TouchableWithoutFeedback>
        ))}
        {}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
              <Image source={{ uri: selectedImage }} style={styles.modalImage} />
            </TouchableWithoutFeedback>
          </View>
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f7f7f7',
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderRadius: 10,
    overflow: 'hidden',
  },
  tableCell: {
    flex: 1,
    alignItems: 'center',
    padding: 8,
  },
  tableHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  dayText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  taskText: {
    fontSize: 16,
    color: 'gray',
  },
  timeText: {
    fontSize: 16,
    color: 'green',
  },
  separator: {
    height: 1,
    backgroundColor: 'lightgray',
    marginBottom: 16,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
  modalImage: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
});

const daysOfWeek = [
  {
    name: 'Segunda-feira',
    image:
      'https://img.freepik.com/vetores-premium/desenho-animado-joga-lixo-na-lixeira_29190-7167.jpg?w=740',
    task: 'Jogo o lixo na rua',
    time: '(3X) 90 minutos',
  },
  {
    name: 'Terça-feira',
    image:
      'https://www.maryhelp.com.br/dicas/wp-content/uploads/2020/11/os-cuidados-que-voce-deve-ter-com-pratos-e-copo-ao-lavar-louca-20201105131647.jpg.jpg',
    task: 'Lavo a louça',
    time: '(6X) 180 minutos',
  },
  {
    name: 'Quarta-feira',
    image:
      'https://media.istockphoto.com/id/1137923596/pt/foto/serious-mixed-race-male-student-with-serious-face-sitting-at-the-deck-in-library-and-using.jpg?s=612x612&w=0&k=20&c=jmrKoDYrzwPxJnv78kSU_g2oj3LLUt8UDjSDi5BDDYw=',
    task: 'Estudo para vestibulinhos',
    time: '(6X) 18 horas',
  },
  {
    name: 'Quinta-feira',
    image: 'https://pejotaempreendimentos.com.br/my_uploads/2022/07/1-3.jpg',
    task: 'Faço compras',
    time: '(1X) 2,5 horas',
  },
  {
    name: 'Sexta-feira',
    image:
      'https://s2-redeglobo.glbimg.com/vTfu-T4eDGUvKMELvpWpEzg13rM=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2021/0/N/BGHgNwQxGkBRBktqc8jg/man-cleaning-his-home-1-.jpg',
    task: 'Passo pano em casa',
    time: '(1X) 2 horas',
  },
  {
    name: 'Sábado',
    image: 'https://artecasas.com.br/wp-content/uploads/2023/08/home-bg.png',
    task: 'Fico na casa do meu pai',
    time: '(1X) 17 horas',
  },
  {
    name: 'Domingo',
    image:
      'https://media.istockphoto.com/id/1326080733/pt/foto/handsome-young-man-sleeping-in-bed.jpg?s=612x612&w=0&k=20&c=kd5xzAh0PoPlvwBVDKirIgm8Ey_GjNFDGrTzTmSJ2N4=',
    task: 'Descanso',
    time: 'Dia todo',
  },
];

export default WeekRoutine;
