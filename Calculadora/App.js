import React, { useState } from 'react';
import {Text, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';

export default function App() {
	const [soma, setSoma] = useState('0');
	const [divisao, setDivisao] = useState('0');
	const [multiplicacao, setMultiplicacao] = useState('0');

	const [valor1, setValor1] = useState('0');
	const [valor2, setValor2] = useState('0');

	function calcular(){ 	
		setSoma((parseFloat(valor1) + parseFloat(valor2)).toFixed(1));
		
		if ((parseFloat(valor1) > 0) && (parseFloat(valor2) > 0)) {
			setDivisao(parseFloat(valor1 / valor2).toFixed(1));
		} else {
			setDivisao(0);
		}
		
		setMultiplicacao(parseFloat(valor1 * valor2).toFixed(1));
	}

	return (
		<SafeAreaView>
			<Text style={{justifyContent: 'center', 
						alignSelf: 'center',
						marginTop: 20}}>Calculadora</Text>
			<TextInput style={{height: 40, 
									borderColor: 'gray', 
									borderWidth: 1, 
									color: 'red', 
									marginTop: 20,
									marginHorizontal: 20, 
									paddingHorizontal: 10,
								backgroundColor: '#FFFFFF'}} 
						placeholder="Valor 1" 
						keyboardType="numeric" 
						value={valor1} 
						onChangeText={ (p) => {setValor1(p)} } />
			<TextInput style={{height: 40, 
									borderColor: 'gray', 
									borderWidth: 1, 
									color: 'red', 
									marginTop: 20,
									marginHorizontal: 20, 
									paddingHorizontal: 10,
								backgroundColor: '#FFFFFF'}} 
						placeholder="Valor 2" 
						keyboardType="numeric" 
						value={valor2} 
						onChangeText={ (a) => {setValor2(a)} } />
			<Text style={{justifyContent: 'center', 
						alignSelf: 'center',
						marginTop: 20}}>Soma: {soma}</Text>
			<Text style={{justifyContent: 'center', 
						alignSelf: 'center',
						marginTop: 20}}>Divisão: {divisao}</Text>
			<Text style={{justifyContent: 'center', 
						alignSelf: 'center',
						marginTop: 20}}>Multiplicação: {multiplicacao}</Text>
			<TouchableOpacity style={{alignItems: 'center',
									justifyContent: 'center',
									backgroundColor: 'red', 
									height: 30, 
									marginHorizontal: 20, 
									borderRadius: 20,
									marginTop: 20}}
									onPress={() => calcular()}>
				<Text style={{color: 'white'}}>Calcular</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}