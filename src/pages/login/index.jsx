import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import MyLogoImg from "../../../assets/logoMenor.png";
import { Feather } from "@expo/vector-icons";

export default function TelaLogin({ navigation }) {
    const [newEmail, setNewEmail] = React.useState('');
    const [enterPassword, setEnterPassword] = React.useState('');

    function AcessCadastro() {
      navigation.navigate('Cadastro');
    }

  return (
    <View style={styles.container}>
      <View style={styles.logoImg}>
        <Image style={{ width: 100, height: 59.92 }} source={MyLogoImg} />
      </View>
      <View style={styles.content}>
        <Text style={styles.titleLogin}>Seja bem vindo</Text>
        <Text style={styles.subTitleLogin}>
          Digite seu E-mail e sua senha, ou{" "}
          <Text 
          style={styles.linkSubTitleCadastro}
          onPress={AcessCadastro}
          >
            cadastre-se agora
          </Text>
          <Feather name="external-link" size={16} color="#1d3557" />
        </Text>
        <TextInput 
        style={styles.inputEmail}
        onChangeText={text => setNewEmail(text)}
        value={newEmail}
        placeholder= 'Digite aqui seu E-mail'
        keyboardType= 'email-address'
        textContentType= 'emailAddress'
        />
        <TextInput 
        style={styles.inputEmail}
        onChangeText={text => setEnterPassword(text)}
        value={enterPassword}
        placeholder= 'Digite aqui sua senha'
        keyboardType= 'numeric'
        textContentType= 'newPassword'
        />
        <Text style={styles.esqueciSenhaleLogin}>Esqueci a Senha!</Text>
        <TouchableOpacity
        style={styles.buttonLoginEntrar}
        onPress={AcessCadastro}
        >
            <Text style={styles.textButtonEntrar}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
    marginTop: 15,
  },

  content: {
    flex: 1,
    width: "90%",
    minHeight: 400,
    maxHeight: 450,
    borderRadius: 13,
    backgroundColor: "#F1FAEE",
    alignItems: "center",
    justifyContent: "flex-start",
    top: 50,
    padding: 20,
    marginBottom: 40,
  },

  titleLogin: {
    alignItems: "center",
    justifyContent: "center",
    color: "#1D3557",
    fontSize: 30,
    fontFamily: "Sora_700Bold",
  },

  subTitleLogin: {
    color: "#1D3557",
    fontSize: 20,
    fontFamily: "Sora_400Regular",
  },

  linkSubTitleCadastro: {
    color: "#1D3557",
    fontSize: 20,
    fontFamily: "Sora_600SemiBold",
    textDecorationLine: "underline",
  },

  inputEmail: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E63946",
    marginTop: 20,
    padding: 5,
    color: "#1D3557",
    fontFamily: "Sora_400Regular",

  },

  esqueciSenhaleLogin: {
    width: "100%",
    color: "#1D3557",
    fontSize: 16,
    fontFamily: "Sora_400Regular",
    textDecorationLine: "underline",
    textAlign: "left",
    justifyContent: "flex-start",
    marginTop: 10,
  },

  buttonLoginEntrar: {
    width: "100%",
    backgroundColor: "#e63946",
    height: 45,
    borderRadius: 8,
    marginTop: 25,
    alignItems: "center",
    justifyContent: "center",
  },

  textButtonEntrar: {
      fontFamily: "Sora_700Bold",
      color: "#F1FAEE",
      fontSize: 30,
      alignItems: "center",
      justifyContent: "center",
  }
});
