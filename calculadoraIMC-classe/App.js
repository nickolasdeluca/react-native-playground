import React, { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native';

export default class App extends Component {

    constructor(props){
		super(props)
		this.state = {altura:0,massa:0,resultado:0}
    }

    Calcular(){
		let imc = this.state.massa / (this.state.altura * this.state.altura);
		this.setState({resultado: imc});
    }

	render() {
		return (
		<View>
			<TextInput  placeholder="Altura" keyboardType="numeric" style={{marginTop:120}} 
				onChangeText={(altura)=>{this.setState({altura})}}/>
			<TextInput  placeholder="Massa"  keyboardType="numeric" style={{marginTop:40}} 
				onChangeText={(massa)=>{this.setState({massa})}}/>
			<Button onPress={ this.Calcular.bind(this) } title=" Calcular " />
			<Text>{this.state.resultado.toFixed(2)}</Text>
			</View>
		);
	}
}