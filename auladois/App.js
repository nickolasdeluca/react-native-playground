import React, { useState } from 'react';
import { ImageBackground, 
	SafeAreaView, 
	FlatList, 
	StyleSheet, 
	StatusBar, 
	View, 
	Text, 
	TextInput, 
	ScrollView, 
	TouchableOpacity,
	Modal } from 'react-native';

const DATA = [
	{
		id: '1',
		title: 'Golf GTI 1.8',
		marca: 'Volkswagen'
	},
	{
		id: '2',
		title: 'Lancer EVO 2.2',
		marca: 'Mitsubishi'
	},
	{
		id: '3',
		title: 'Sandero Stepway 1.6',
		marca: 'Renault'
	},
  ];

const image = { uri: "https://tnsul.com/wp-content/uploads/2019/09/Lucas-Colombo-Faculdade-Senac-Crici%C3%BAma-16.jpg" };

const App = () => {
	const [modalVisible, setModalVisible] = useState(false);
	
	const renderItem = ({ item }) => (
		<View style={styles.item}>
			<Text style={styles.title}>{item.id} - {item.marca} - {item.title}</Text>
		</View>
	);
   
	return (
		<ImageBackground source={image} resizeMode='cover' style={styles.image}>
			<Modal
				animationType='none'
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					Alert.alert("Modal has been closed.");
					setModalVisible(!modalVisible);
				}}
			>
				<View style={{height: '82%'}}></View>
				<View>
					<TextInput style={{height: 40, 
									borderColor: 'gray', 
									borderWidth: 1, 
									color: 'red', 
									margin: 20, 
									paddingHorizontal: 10,
								backgroundColor: '#FFFFFF'}} 
							placeholder='Texto'>
					</TextInput>
					<TouchableOpacity 
							style={styles.button}
							onPress={() => setModalVisible(!modalVisible)}
					>
						<Text style={{color: '#FFFFFF'}}>Teste</Text>
					</TouchableOpacity>
				</View>
			</Modal>
			<SafeAreaView style={styles.container}>
				<FlatList data={DATA}
						renderItem={renderItem}
						keyExtractor={item => item.id}
				/>
				<TouchableOpacity 
						style={styles.button}
						onPress={() => setModalVisible(!modalVisible)}
				>
					<Text style={{color: '#FFFFFF'}}>Abrir</Text>
				</TouchableOpacity>
			</SafeAreaView>
		</ImageBackground>
	   	
	 );
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#BB2A2A',
		padding: 10,
		marginHorizontal: 10,
		borderRadius: 20,
		alignItems: 'center'
	},
	image: {
		flex: 1,
		justifyContent: "center"
	},
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight || 0,
	},
	item: {
		backgroundColor: '#BB2A2A',
		padding: 20,
		borderRadius: 20,
		marginVertical: 8,
		marginHorizontal: 16,
	},
	title: {
		fontSize: 12,
		color: '#FFFFFF'
	},
  });

export default App;