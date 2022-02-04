import React, {Component} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

import styles from './styles/estilo';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = { 
      fraseAntiga: '',
      numeroSort: '',
      img: require('./src/roleta.jpg')
    };

    this.giraRoleta = this.giraRoleta.bind(this);

    this.numeros = ['1','2','3','4','5','6','7','8','9','10',
                    '11','12','13','14','15','16','17','18','19','20',
                    '21','22','23','24','25','26','27','28','29','30',
                    '31','32','33','34','35','36','37','38','39','40',
                    '41','42','43','44','45','46','47','48','49','50',
                    '51','52','53','54','55','56','57','58','59','60',
                    '61','62','63','64','65','66','67','68','69','70',
                    '71','72','73','74','75','76','77','78','79','80',
                    '81','82','83','84','85','86','87','88','89','90',
                    '91','92','93','94','95','96','97','98','99','100'];
  }
________________________________________________________________________________________________________________

  giraRoleta(){
    
    let numeroAleatorio = Math.floor(Math.random() * this.numeros.length);

    this.setState({
      numeroSort: 'O número sorteado foi o  "' + this.numeros[numeroAleatorio] + '" ',
      img: require('./src/carl.gif'),
    }); 

    console.log(this.state.fraseAntiga);
    this.setState({
      fraseAntiga: this.state.fraseAntiga + ' ' + this.numeros[numeroAleatorio] + ', ',
    });  

    setTimeout(
      function() {
          this.setState({numeroSort: false});
      }
      .bind(this),
      5000
    ),
    
    setTimeout(() => 
    {
      this.setState({
          img: require('./src/roleta.jpg')
        })
    },5000)
  }
________________________________________________________________________________________________________________

  render(){
    return(

      <View style={styles.container} >

        <Image
         source={require('./src/bingo.gif')}
         style={styles.logo}
        />
        
        <Image
        source={this.state.img}
        style={styles.img}
        />
        
        <Text style={styles.numeroSort}>{this.state.numeroSort}</Text>
        <Text style={styles.numeroSort}>{this.state.fraseAntiga}</Text>
      
        <TouchableOpacity style={styles.botao} onPress={this.giraRoleta}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Girar a roleta</Text>
          </View>

        </TouchableOpacity>
        
      </View>
      
    );
  }
}
