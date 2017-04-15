import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textInput: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1

  },
    parent: {
        padding: 16
    },
    germanLabel: {
        marginTop: 20,
        fontWeight: 'bold'
    },
    germanWord: {
        marginTop: 15,
        fontSize: 30,
        fontStyle: 'italic'
    }
});

export default Style;