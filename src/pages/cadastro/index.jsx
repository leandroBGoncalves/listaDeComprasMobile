import React from "react";
import { ScrollView, StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";


import MyLogoImg from "../../../assets/logoMenor.png";



export default function CadastroTela() {

    function handleSubmit(data) {
        console.log(data);
    }

    return (
        <View style={styles.containerCadastro}>
            <View style={styles.logoImg}>
              <Image style={{ width: 100, height: 59.92 }} source={MyLogoImg} />
            </View>
            <ScrollView style={styles.contentFormCadastro}>
                <Text>teste</Text>
                    <TouchableOpacity
                    style={styles.buttonCadastro} 
                    onPress={handleSubmit}
                    >
                     <Text style={styles.textButtonCadastro}>Cadastrar</Text>
                    </TouchableOpacity>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    containerCadastro: {
      flex: 1,
      width: "100%",
      backgroundColor: "#E63946",
      alignItems: "center",
      justifyContent: "flex-start",
    },

    logoImg: {
        width: "100%",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        paddingStart: 25,
        marginTop: 25,
      },
    
    contentFormCadastro: {
        width: "100%",
        maxWidth: "90%",
        height: "100%",
        maxHeight: 600,
        backgroundColor: "#F1FAEE",
        marginTop: 25,
        borderRadius: 13,

    },
    
    inputText: {
        width: "100%",
        height: 40,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#E63946",
    },

    buttonCadastro: {
        width: "100%",
        backgroundColor: "#e63946",
        height: 45,
        borderRadius: 8,
        marginTop: 25,
        alignItems: "center",
        justifyContent: "center",
      },
    
      textButtonCadastro: {
          fontFamily: "Sora_700Bold",
          color: "#F1FAEE",
          fontSize: 30,
          alignItems: "center",
          justifyContent: "center",
      }

});