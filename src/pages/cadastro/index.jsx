import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Image, TouchableOpacity, Text, TextInput } from "react-native";

import { TextInputMask } from "react-native-masked-text"
import { AntDesign } from '@expo/vector-icons';



import MyLogoImg from "../../../assets/logoMenor.png";



export default function CadastroTela({ navigation }) {
    const [isCellNumber, setIsCellNumber] = useState('')
    const [isDateNacimento, setIsDateNacimento] = useState('')
    const [isPassword, setIsPasswor] = useState('')
    const [isConfirmPassword, setIsConfirmPassword] = useState('')


    function AcessDashaboard() {
        navigation.navigate('Dashaboard');
      }

    return (
        <View style={styles.containerCadastro}>
            <View style={styles.logoImg}>
              <Image style={{ width: 100, height: 59.92 }} source={MyLogoImg} />
            </View>
            <ScrollView style={styles.contentFormCadastro}>
                    <Text style={styles.titleCadastro}>Preencha suas informações</Text>
                    <TextInput 
                     style={styles.inputTextCadastro}
                     placeholder= 'Digite aqui seu E-mail'
                     keyboardType= 'email-address'
                     textContentType= 'emailAddress'
                    />
                    <TextInput 
                     style={styles.inputTextCadastro}
                     placeholder= 'Digite aqui seu Nome Completo'
                     keyboardType= 'name-phone-pad'
                     textContentType= 'name'
                    />
                    <TextInput 
                     style={styles.inputTextCadastro}
                     placeholder= 'Como voce gostaria de ser chamado'
                     keyboardType= 'name-phone-pad'
                     textContentType= 'namePrefix'
                    />
                    <View style={styles.divInputNumber}>
                    <View style={styles.divLabelInput}>
                    <Text style={styles.textLabelInput}>Data de Nascimento</Text>       
                    <TextInputMask 
                        style={styles.inputNumberCadastro}
                        type='datetime'
                        placeholder="00/00/0000"
                        options={{
                            format: 'DD/MM/YYYY'
                        }}
                        value={isDateNacimento}
                        onChangeText={text => setIsDateNacimento(text)}
                        />
                    </View> 
                    <View style={styles.divLabelInput}>
                    <Text style={styles.textLabelInput}>Telefone Celular</Text> 
                        <TextInputMask 
                        style={styles.inputNumberCadastro}
                        type='cel-phone'
                        placeholder="(99) 99999-9999"
                        options={{
                            maskType: 'BRL',
                            withDDD: true,
                            dddMask: '(99) '
                        }}
                        value={isCellNumber}
                        onChangeText={text => setIsCellNumber(text)}
                        />
                    </View> 
                    </View>
                    <View style={styles.divInputNumber}>
                    <View style={styles.divLabelInput}>
                    <Text 
                    style={styles.textLabelInput}
                    >
                        Crie uma senha
                        <AntDesign name="infocirlceo" size={11} color="black" />
                    </Text>       
                    <TextInput 
                        style={styles.inputNumberCadastro}
                        placeholder= 'Max: 6 digitos'
                        secureTextEntry={true}
                        maxLength={6}
                        value={isPassword}
                        onChangeText={text => setIsPasswor(text)}
                        />
                    </View> 
                    <View style={styles.divLabelInput}>
                    <Text style={styles.textLabelInput}>Confirme sua senha</Text> 
                    <TextInput 
                        style={styles.inputNumberCadastro}
                        placeholder= 'Max: 6 digitos'
                        secureTextEntry={true}
                        maxLength={6}
                        value={isConfirmPassword}
                        onChangeText={text => setIsConfirmPassword(text)}
                        />
                    </View> 
                    </View>
                    <TouchableOpacity
                    style={styles.buttonCadastro} 
                    onPress={AcessDashaboard}
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
        maxHeight: 550,
        backgroundColor: "#F1FAEE",
        marginTop: 25,
        borderRadius: 13,
        padding: 20,

    },

    titleCadastro: {
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        color: "#1D3557",
        fontSize: 30,
        fontFamily: "Sora_700Bold",
    },
    
    inputTextCadastro: {
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

      divInputNumber: {
          flexDirection: "row",
          justifyContent: "space-between",
      },

      inputNumberCadastro: {
        width: "100%",
        height: 40,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#E63946",
        marginTop: 0,
        padding: 5,
        color: "#1D3557",
        fontFamily: "Sora_400Regular",
    
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
      },

      divLabelInput: {
        flexDirection: "column",
        width: "45%",
        height: 50,
        marginTop: 20,
        justifyContent: "center",
      },

      textLabelInput: {
        color: "#1D3557",
        fontFamily: "Sora_400Regular",
        fontSize: 13,
      }

});