import * as React from 'react';
import { Text, View, Button, Image } from 'react-native';
import styles  from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Weather() {
    return (
      <View style={styles.container}>
        <View style={styles.info}>
          <View style={{display: 'flex', flexDirection:"row"}}>
            <Ionicons name="ios-location" size={20} color="black" />
            <Text style={styles.text}> Londrina, Brasil </Text>
          </View>
          <View>
            <Text style={{fontSize: 12, color:"black"}}>20-Sep-2022</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View>
            <Text style={{fontSize: 60, color:"black"}}>20°</Text>
            <Text style={{color:"black", fontSize: 12, fontWeight:"bold", marginTop:15}}>Real Feel: 20</Text>
          </View>
          <View>
            <Image style={{width:70, height:65}} source={require('../../assets/Vector.png')}/>
            <Text style={{fontSize:20, fontWeight:"bold", color:"black", marginTop:20}}>Cloudy</Text>
          </View>
        </View>

        <View style={styles.uv}>
          <View>
            <Text style={styles.text_uv}>UV Index</Text>
            <Text style={styles.text_uv}>Humidity</Text>
            <Text style={styles.text_uv}>Wind Speed</Text>
            <Text style={styles.text_uv}>Rain Probability</Text>
            <Text style={styles.text_uv}>Pressure</Text>
          </View>
          <View>
            <Text style={styles.text_uv}></Text>
            <Text style={styles.text_uv}>55</Text>
            <Text style={styles.text_uv}>10km/h</Text>
            <Text style={styles.text_uv}>10%</Text>
            <Text style={styles.text_uv}>1023.1 pa</Text>
          </View>
        </View>
      </View>
    );
}

