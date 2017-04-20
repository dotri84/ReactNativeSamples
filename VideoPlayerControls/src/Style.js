import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({
    backgroundVideo: {
   
  },
  mainContainer:{
        flex:1                  //Step 1
  },
  content:{
        flex:1 ,
        flexDirection: 'column'
    },
  controls: {
     flexDirection: 'row',
    backgroundColor: '#2196F3',
    height: 50,
    justifyContent: 'center',
        alignItems: 'center',
  },
  backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
  playButton: {
      width: 30,
      height: 37
  },
  playImage: {
      width: 23,
      height: 28,

  },
  toolbar:{
        backgroundColor:'#81c04d',
        paddingTop:35,
        paddingBottom:10,
        flexDirection:'row'    //Step 1
    },
    toolbarButton:{
        width: 50,            //Step 2
        color:'#fff',
        textAlign:'center'
    },
    toolbarTitle:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold',
        flex:1                //Step 3
    }
});

export default Style;