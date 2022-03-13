import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Button(props) {
 return (
   <View style={styles.container}>
       <TouchableOpacity style={styles.btnContainer} onPress={props.onClick}>
           <Text style={styles.title}>COMPRAR</Text>
       </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnContainer: {
        width: '90%',
        height: 50,
        borderRadius: 5,
        backgroundColor: '#17181a',
        marginVertical: '5%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 17,
        color: '#FFF'
    }
});