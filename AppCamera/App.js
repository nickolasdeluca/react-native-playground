import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity, Linking } from 'react-native';
import { Camera } from 'expo-camera';

export default function App() {
	const [hasPermission, setHasPermission] = useState(null);
	const [type, setType] = useState(Camera.Constants.Type.back);
	
	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestCameraPermissionsAsync();
			setHasPermission(status === 'granted');
		})();
	}, []);

	if (hasPermission === null) {
		return <SafeAreaView/>
	}

	if (hasPermission === false) {
		return <SafeAreaView style={{alignItems: 'center'}} >
			<Text>Sem acesso à camera!</Text>
			<TouchableOpacity 
				style={{
					alignItems: "center",
					backgroundColor: "#DDDDDD",
					padding: 10,
					marginTop: 50}}
				onPress={() => {
					Linking.openURL('app-settings:');
				}}>
				<Text>Habilitar acesso a camera</Text>
			</TouchableOpacity>
		</SafeAreaView>
	}

	return (
		<View style = {styles.container}>
			<Camera style={styles.camera} type={type}>
				<View style={styles.buttonContainer}>
					<TouchableOpacity 
						style={styles.button}
						onPress={() => {
							setType(type === Camera.Constants.Type.back 
								? Camera.Constants.setType.front 
								: Camera.Constants.Type.back
							);
						}}></TouchableOpacity>
				</View>
			</Camera>
		</View>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  camera: {
	flex: 1
  },
  buttonContainer: {
	  flex: 1,
	  backgroundColor: 'transparent',
	  flexDirection: 'row',
	  margin: 20
  },
  button: {
	  flex: 0.1,
	  alignSelf: 'flex-end',
	  alignSelf: 'center'
  },
  text: {
	  fontSize: 18,
	  color: 'white'
  }
});
