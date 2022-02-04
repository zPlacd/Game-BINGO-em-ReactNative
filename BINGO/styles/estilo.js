import {StyleSheet} from 'react-native';

const styles = StyleSheet.create ({ 
    container: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 20,
      borderColor: '#000'
    },
  
    logo:{
      width: 300,
      height: 200,
    },
  
    img: {
      width: 200,
      height: 280,
      marginBottom: 50
    },
  
    numeroSort: {
      fontSize: 18,
      color: '#fff',
      margin: 30,
      fontStyle: 'italic',
      borderRadius: 10,
      textAlign: 'center',
      width: 250,
      backgroundColor: '#4d0099',
      marginTop: -10
    },
  
    botao: {
      width: 230,
      height: 50,
      borderWidth: 2,
      borderColor: '#000'
    },
  
    btnArea: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: '#000'
    },
    
    btnTexto: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#4d0099',
      fontWeight: 'bold',
      alignItems: 'center'
    }
});

export default styles;