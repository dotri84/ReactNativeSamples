import React, { Component } from 'react';
import { AppRegistry, View, Text, TextInput } from 'react-native';
import Style from './Style';

var english_german = require('../english_german.json');

class DictionaryMain extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            input: '' ,
            output: ''
        };
    }
    render() {
        return (
            <View style = { Style.parent } >
 
            <Text>
                Type something in English:
            </Text>
 
            <TextInput style = { Style.textInput } 
                onChangeText={(text)=>this._onTextInputChangeText(text)} 
                value={this.state.input} 
                onSubmitEditing = { this.showMeaning.bind(this) }/>
            <Text style = { Style.germanWord } >      
                {this.state.input}          
            </Text>
            <Text style = { Style.germanLabel } >
                Its German equivalent is:
            </Text>
 
            <Text style = { Style.germanWord } >      
                {this.state.output}          
            </Text>
           
        </View>
        );
    }

    _onTextInputChangeText(text) {
        //alert(text);
        this.setState({
            input : text
        })
    }

    showMeaning() {
        var meaning = this.state.input in english_german ? 
                        english_german[this.state.input] : 
                        "Not Found";
    
        // Update the state
        this.setState({
            output: meaning 
        });
    }
}

AppRegistry.registerComponent('Dictionary', () => DictionaryMain);