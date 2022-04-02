import React, { useState } from 'react';
import {Text, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';

export default function App() {
	const [peso, alteraPeso] = useState('80');
	const [altura, alteraAltura] = useState('1.84');
	const [imc, alteraIMC] = useState(0);

	function calcularIMC(){ 
		const indice = (
			parseFloat(peso) / (parseFloat(altura) *  parseFloat(altura))
		);
		alteraIMC(indice.toFixed(1));
	}

	return (
		<SafeAreaView>
			<Text style={{justifyContent: 'center', 
						alignSelf: 'center',
						marginTop: 20}}>Calculadora de IMC</Text>
			<TextInput style={{height: 40, 
									borderColor: 'gray', 
									borderWidth: 1, 
									color: 'red', 
									marginTop: 20,
									marginHorizontal: 20, 
									paddingHorizontal: 10,
								backgroundColor: '#FFFFFF'}} 
						placeholder="Peso" 
						keyboardType="numeric" 
						value={peso} 
						onChangeText={ (p) => {alteraPeso(p)} } />
			<TextInput style={{height: 40, 
									borderColor: 'gray', 
									borderWidth: 1, 
									color: 'red', 
									marginTop: 20,
									marginHorizontal: 20, 
									paddingHorizontal: 10,
								backgroundColor: '#FFFFFF'}} 
						placeholder="Altura" 
						keyboardType="numeric" 
						value={altura} 
						onChangeText={ (a) => {alteraAltura(a)} } />
			<Text style={{justifyContent: 'center', 
						alignSelf: 'center',
						marginTop: 20}}>Resultado: {imc}</Text>
			<TouchableOpacity style={{alignItems: 'center',
									justifyContent: 'center',
									backgroundColor: 'red', 
									height: 30, 
									marginHorizontal: 20, 
									borderRadius: 20,
									marginTop: 20}}
									onPress={() => calcularIMC()}>
				<Text style={{color: 'white'}}>Calcular</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}