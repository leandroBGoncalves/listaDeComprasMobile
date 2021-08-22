import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import MyLogoImg from '../../../assets/logoMenor.png';

export default function TelaLogin() {
    return (
        <View style={styles.container}>
            <View style={styles.logoImg}>
            <Image style={{ width: 100, height: 59.92 }} source={MyLogoImg}/>
            </View>
            <View style={styles.content}>
                <Text style={styles.titleLogin}>Seja bem vindo</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      backgroundColor: '#E63946',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },

    logoImg: {
        flex: 1,
        width: "100%",
        height: 10,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingTop: 40,
        paddingStart: 20,
    },

    content: {
        flex: 8,
        width: "90%",
        height: "100%",
        borderRadius: 13,
        backgroundColor: "#F1FAEE",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 0,
        marginBottom: 40,
    },

    titleLogin: {
        alignItems: 'center',
        justifyContent: 'center',
        color: "#1D3557",
        fontWeight: "700",
        fontSize: 30,
    }
  });