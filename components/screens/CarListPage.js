import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const carros = [
  { id: '1', marca: 'Toyota', modelo: 'Corolla', ano: 2023, tipo: 'Sedan', preco: 193590, quilometragem: 0, descricao: 'O Toyota Corolla 2023 mantém suas características consagradas, sem alterações em relação ao ano anterior. Disponível com dois tipos de motorização, incluindo o eficiente sistema híbrido, oferece opções para diferentes necessidades. Seu design elegante e dimensões generosas proporcionam conforto e espaço amplo para os ocupantes.', imagem: 'https://quatrorodas.abril.com.br/wp-content/uploads/2022/06/2023-Toyota-Corolla-Sedan-EU-Spec-1-1-e1654192618844.jpg?quality=70&strip=info' },
  { id: '2', marca: 'Honda', modelo: 'Civic', ano: 2018, tipo: 'Sedan', preco: 126900, quilometragem: 84000, descricao: 'O Honda Civic 2018 é um sedã elegante e confiável, perfeito para quem busca conforto e desempenho. Equipado com um motor 1.5 16V Turbo a gasolina, oferece uma experiência de condução suave e potente. Sua transmissão automática CVT proporciona trocas de marchas precisas e sem trancos, tornando cada viagem mais agradável.', imagem: 'https://www.blogauto.com.br/wp-content/2017/03/Honda-Civic-Type-R-2018-1.jpg' },
  { id: '3', marca: 'Ford', modelo: 'MUSTANG-MACH 1', ano: 2022, tipo: 'Coupe', preco: 516990, quilometragem: 0, descricao: 'O Ford Mustang 2022, um cupê potente com motor 5.0 V8 TI-VCT a gasolina, garante uma condução emocionante. Com transmissão automática SelectShift, oferece trocas suaves e precisas. Este modelo é novo, com 0 km rodados, proporcionando uma experiência de direção totalmente fresca. Sua carroceria branca adiciona elegância e destaque.', imagem: 'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202401/20240111/ford-mustang-5.0-v8-tivct-gasolina-mach-1-selectshift-wmimagem09501094439.jpg?s=fill&w=552&h=414&q=60' },
  { id: '4', marca: 'Volkswagen', modelo: 'Gol', ano: 2023, tipo: 'Hatchback', preco: 48000, quilometragem: 0, descricao: 'Descrição do Volkswagen Gol novo', imagem: 'https://th.bing.com/th/id/OIP.cAGAKyH0jjMA8xA-3yX6cgAAAA?rs=1&pid=ImgDetMain' },
  { id: '5', marca: 'Fiat', modelo: 'Palio', ano: 2017, tipo: 'Hatchback', preco: 49990, quilometragem: 91187, descricao: 'O Fiat Palio 2017, modelo 1.6 MPI Sporting 16V Flex 4P com transmissão manual, oferece uma condução dinâmica e versátil. Com 91.187 km rodados, é uma opção confiável para quem procura um hatchback. Sua carroceria na cor preta confere um visual elegante e discreto. Localizado em São Paulo - SP, o vendedor responde rapidamente e aceita troca. Este veículo tem todas as revisões feitas pela agenda do carro, sendo único dono e com o IPVA pago e licenciado. Uma escolha sólida para quem busca qualidade e praticidade.', imagem: 'https://th.bing.com/th/id/R.a6b113f41e577fa67e57f7a94ee3dcee?rik=Pq%2bZfFhp%2bc6h7w&pid=ImgRaw&r=0' },
  { id: '6', marca: 'Renault', modelo: 'Kwid', ano: 2022, tipo: 'Hatchback', preco: 53991, quilometragem: 24000, descricao: 'Auto Mega Motors. Veículos Seminovos com garantia de 3 Meses, veículos periciados, procedência e qualidade garantida. Faça já sua simulação de financiamento online em até 60x sem entrada. Trabalhamos com vários bancos para garantir segurança e as melhores taxas. Quer dar seu seminovo como parte de pagamento? Temos a melhor avaliação do mercado no seu veiculo na troca. *Consulte disponibilidade da oferta. Loja 1 - Ipiranga Loja 2- Jabaquara Outros Opcionais: Farol de neblina, Direção Elétrica, Distribuição eletrônica de frenagem, Kit Multimídia, Pára-choques na cor do veículo.', imagem: 'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202404/20240403/renault-kwid-1.0-12v-sce-flex-intense-manual-wmimagem11324088317.jpg?s=fill&w=552&h=414&q=60' },
  { id: '7', marca: 'Hyundai', modelo: 'HB20', ano: 2020, tipo: 'Hatchback', preco: 64900, quilometragem: 48555, descricao: 'O HYUNDAI HB20 é um compacto que se destaca pelo seu design versátil, amplo espaço interno, tecnologia avançada e segurança abrangente. Oferece desempenho eficiente e uma experiência de condução dinâmica, sendo uma opção popular para quem busca um veículo prático e moderno para uso diário. Descubra a excelência automotiva na AUTO VYP! Outros Opcionais: Farol de neblina, Direção Elétrica, Comando de áudio no volante, Controle de estabilidade, Distribuição eletrônica de frenagem, Kit Multimídia, Pára-choques na cor do veículo.', imagem: 'https://img.volanty.com/zoom/inspecao/6469958127058944/20200914/1600077006065.jpg' },
  { id: '8', marca: 'McLaren', modelo: 'Senna', ano: 2021, tipo: 'Coupe', preco: 3400000, quilometragem: 0, descricao: 'O McLaren Senna 2021/2022 é um supercarro fenomenal, equipado com um motor V8 biturbo de alta performance e uma transmissão automatizada. Este veículo está completamente novo, com 0 km rodados. Sua elegante carroceria prateada adiciona uma aura de sofisticação e modernidade. Localizado em Balneário Camboriú - SC, o vendedor responde com rapidez e está aberto a negociações. Este McLaren Senna tem um único proprietário e todas as manutenções foram realizadas conforme a agenda do veículo e pela concessionária, além de contar com garantia de fábrica. Uma oportunidade excepcional para entusiastas que buscam um supercarro de alto desempenho e exclusividade.', imagem: 'https://mclaren.scene7.com/is/image/mclaren/Senna-tile-1-1200x1200:crop-4x3?wid=1920&hei=1440' },
  { id: '9', marca: 'MASERATI', modelo: 'MC20', ano: 2022, tipo: 'Coupe', preco: 3299999, quilometragem: 1600, descricao: 'O Maserati MC20 2021/2022 é um cupê deslumbrante, equipado com um motor 3.0 V6 Biturbo a gasolina e transmissão automática DCT. Com apenas 1.600 km rodados, este veículo é praticamente novo, oferecendo uma experiência de condução fresca e emocionante. Sua elegante carroceria na cor branca adiciona um toque de sofisticação e distinção. Localizado em Brusque - SC, o vendedor aceita troca, proporcionando flexibilidade para os interessados. Este Maserati MC20 apresenta uma combinação única de estilo, luxo e desempenho, representando uma oportunidade excepcional para entusiastas de carros esportivos de alto nível.', imagem: 'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202402/20240209/maserati-mc20-3.0-v6-biturbo-gasolina-dct-wmimagem16481893749.jpg?s=fill&w=1920&h=1440&q=75' },
  { id: '10', marca: 'Porsche', modelo: '911 GT3 RS', ano: 2023, tipo: 'Coupe', preco: 4555000, quilometragem: 0, descricao: 'Porsche 911 GT3 RS 2023/2024 - O auge da engenharia automotiva, combinando desempenho de pista com luxo e conforto. Equipado com um motor 4.0 boxer de 6 cilindros aspirado e uma transmissão PDK de 7 marchas, entrega uma experiência de direção inigualável. Seu design icônico e aerodinâmica aprimorada garantem uma presença marcante nas ruas e pistas.', imagem: 'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202404/20240429/porsche-911-4-0-24v-h6-gasolina-gt3-rs-pdhk-wmimagem15185241676.webp?s=fill&w=552&h=414&q=60' },
  { id: '11', marca: 'BMW', modelo: 'M3', ano: 2021, tipo: 'Usado', preco: 899000, quilometragem: 4500, descricao: 'BMW M3 3.0 Sedan 24V 6CC Turbo Gasolina 4P Automático 2020/2021 - Um ícone entre os sedans esportivos, combinando potência, elegância e inovação tecnológica. Equipado com motor 3.0 turbo, entrega uma performance excepcional, complementada pela transmissão automática de 8 marchas. Com apenas 4.500 km rodados, está em excelente estado de conservação.', imagem: 'https://www.webmotors.com.br/imagens/prod/348844/BMW_M3_3.0_I6_TWINTURBO_GASOLINA_COMPETITION_TRACK_STEPTRONIC_34884414314776238.png?s=fill&w=440&h=330&q=80&t=true' },
  { id: '11', tipo: 'Novo', marca: 'Ferrari', modelo: 'SF90', ano: 2023, preco: '7.990.000', quilometragem: 0, imagem: 'https://th.bing.com/th/id/R.a2c56b969e47ac76d741c3c490d1125d?rik=07hxU1Em%2fYesOw&pid=ImgRaw&r=0', descricao: 'A Ferrari SF90 2023 é um cupê extraordinário, equipado com um motor 3.9 V8 Turbo PHEV Stradale F1-DCT, oferecendo uma combinação impressionante de potência e eficiência. Com transmissão automática, proporciona uma experiência de condução excepcionalmente suave. Este modelo é novo, com 0 km rodados, garantindo uma experiência de direção completamente nova. Sua carroceria vermelha adiciona um toque de esportividade e destaque nas ruas de Balneário Camboriú - SC. Além disso, o vendedor aceita troca e todas as revisões foram feitas pela concessionária. Esta Ferrari SF90 é a escolha definitiva para os entusiastas de carros esportivos que procuram o máximo desempenho e elegância.' },
  { id: '12', tipo: 'Usado', marca: 'MERCEDES-BENZ', modelo: 'A 35 AMG', ano: 2020, preco: '316.900', quilometragem: '29.310', imagem: 'https://cdn.autopapo.com.br/box/uploads/2019/10/03105618/mercedes-amg-a-35-4matic-lateral1.jpg', descricao: 'Teto solar, painel digital, espelhamento da tela do celular, GPS, volante multifuncional com troca de marchas, ar condicionado digital dual zone, sistema Star Stop, retrovisores elétricos fotocrômicos, freio de estacionamento eletrônico, faróis em LED com acendimento automático direcional, direção assistida, controle de velocidade adaptativo, chave presencial, sensor de estacionamento dianteiro, traseiro e câmera de ré, bancos em couro nobuck com regulagens elétricas, 5 modos de condução.' },
  { id: '13', tipo: 'Novo', marca: 'BMW', modelo: 'X6', ano: 2024, preco: '1.190.950', quilometragem: 0, imagem: 'https://production.autoforce.com/uploads/picture/image/228639814/main_webp_comprar-x6-m-competition-2023-1922efea-fc2e-4fd8-9b67-df8ed80ec6a2_9872f6a0c3.jpg.webp', descricao: 'A BMW X6 M Competition é um SUV de alto desempenho, oferecendo uma combinação única de luxo, conforto e potência. Seu motor 4.4 V8 produz incríveis 625 cv a 6.000 rpm, proporcionando uma experiência de condução emocionante. Equipado com uma transmissão automática de 8 velocidades e tração integral, garante uma resposta rápida e controle excepcional em diversas condições de estrada. Com capacidade para cinco passageiros e quatro portas, a X6 M Competition oferece conforto e espaço para toda a família.' },
  { id: '14', tipo: 'Usado', marca: 'Range Rover', modelo: 'Velar', ano: 2023, preco: '569.900', quilometragem: '13.450', imagem: 'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202404/20240409/land-rover-range-rover-velar-3.0-p340-gasolina-rdynamic-hse-automatico-wmimagem16344226949.jpg?s=fill&w=552&h=414&q=60', descricao: 'O Land Rover Range Rover Velar 2022/2023 é um utilitário esportivo imponente, equipado com um motor 3.0 P340 a gasolina e transmissão automática. Com apenas 13.450 km rodados, este veículo está praticamente novo. Sua carroceria na cor branca adiciona um toque de elegância e sofisticação. Localizado em Belo Horizonte - MG, o vendedor responde rápido e aceita troca. Este Velar tem todas as revisões feitas pela concessionária e possui garantia de fábrica, garantindo tranquilidade ao comprador.' },
  { id: '15', tipo: 'Usado', marca: 'AUDI', modelo: 'RS4', ano: 2021, preco: '559.000', quilometragem: '24.651', imagem: 'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202404/20240418/audi-rs4-2.9-v6-tfsi-gasolina-avant-quattro-stronic-wmimagem14053997429.jpg?s=fill&w=552&h=414&q=60', descricao: 'Audi RS4 Avant V6 Biturbo – Veículo com todas as revisões realizadas na concessionária, acompanha manual – Câmbio automático de com opção de trocas manuais (Paddle Shift), tração integral QUATTRO, seleção no volante RS Mode, no teto solar panorâmico com abertura, bancos em couro com ajustes elétricos, memórias e função massagem, ar condicionado digital, luzes em led nas portas e console central, head-up display, sistema de som Bang Olufsen volante multifuncional revestido.' }
];



const CarListScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('CarDetails', { car: item })}
    >
      <Image source={{ uri: item.imagem }} style={styles.image} />
      <Text style={styles.carName}>{item.marca} {item.modelo}</Text>
      <Text style={styles.carDetails}>{item.ano} - {item.preco}</Text>
      <Text style={styles.carDescription}>{item.descricao.slice(0, 50)}...</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={carros}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        numColumns={4} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 10, // Adicionando padding horizontal para evitar que os cartões fiquem muito próximos das bordas laterais
  },
  list: {
    paddingVertical: 10, // Ajustando o padding vertical para manter o espaçamento entre os cartões
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 15, // Espaçamento entre os cartões
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    marginHorizontal: 5, // Adicionando margem horizontal para separar os cartões
    width: '34%',
  },
  image: {
    width: '100%',
    height: 200, 
    borderTopLeftRadius: 8, 
    borderTopRightRadius: 8,
  },
  carName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
    marginHorizontal: 10,
  },
  carDetails: {
    fontSize: 14,
    color: '#555',
    marginHorizontal: 10,
  },
  carDescription: {
    fontSize: 12,
    color: '#777',
    marginHorizontal: 10,
    marginBottom: 10,
  },
});


export default CarListScreen;
