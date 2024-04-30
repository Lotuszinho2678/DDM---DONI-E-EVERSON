import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  cardContainer: {
    top:20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginBottom: 30,
    width: '30%', 
    marginRight: '3%', 
    marginLeft: '1%', 
    elevation: 3,
    borderWidth: 2, 
    borderColor: 'black', 
  },
  carImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textContainer: {
    padding: 10,
  },
  carName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  carLabel: {
    fontWeight: 'bold',
    color: '#000',
  },
  carYear: {
    fontSize: 14,
    color: '#191970',
  },
  carDescription: {
    fontSize: 14,
    color: 'black',
  },
  carPrice: {
    fontSize: 14,
    color: 'green',
  },
  carType: {
    color: 'red',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fundo escuro translúcido
  },
  modalImage: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain', // Ajusta a imagem ao tamanho do modal
  },
  closeButton: {
    color: 'white',
    backgroundColor: 'black',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
});
