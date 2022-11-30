import * as React from 'react';
import { Text, View, Button, Image} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function News(){
    return(
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

            <Text style={styles.title}>News Daily</Text>

            <View style={styles.cards}>
                <View style={styles.card}>
                    <View style={styles.imgCard}>
                        <Image source={require('../../assets/porco.png')} ></Image>
                    </View>
                    <View style={{display: 'flex', flexDirection:"column", width:210, marginLeft:10}}>
                        <View>
                            <Text style={{fontSize:14, fontWeight:"bold", color:"black", marginTop:10}}>Animal Scientist Discovers:</Text>
                            <Text style={{fontSize:10}}>Researchers from the University of All
                                Knowing have discovered a new way to
                                breed farm animals.</Text>
                        </View>
                        <View>
                            <Text>Thur 09 2022</Text>
                        </View>
                    </View>
                </View>

                
            </View>
            

        </View>
    )
}