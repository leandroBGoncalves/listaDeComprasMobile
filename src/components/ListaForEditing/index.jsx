import React, { useState } from 'react';

import { ScrollView, TextInput, StyleSheet, View } from 'react-native';


export default function ListaCreated() {
    const [isNewProduct, setIsNewProduct] = useState('');
    const [isQuantItem, setIsQuantItem] = useState('');

    return (
        <ScrollView style={styles.containerListEdit}>
            <View style={styles.boxImputLine}>
                <TextInput
                style={styles.inputProduct}
                keyboardType= "name-phone-pad"
                placeholder= 'Produto'
                maxLength={25}
                value={isNewProduct}
                onChangeText={text => setIsNewProduct(text)}
                />

                <TextInput 
                    style={styles.inputQuantidade}
                    keyboardType= "numeric"
                    placeholder= 'Quantidade'
                    maxLength={5}
                    value={isQuantItem}
                    onChangeText={text => setIsQuantItem(text)}
                    />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    containerListEdit: {
        width: "100%",
        marginTop: 20,
        padding: "10%",
        
    },

    boxImputLine: {
        flexDirection: "row",
    },

    inputProduct: {
        width: "60%",
        height: 40,
        borderWidth: 1,
        borderRightWidth: 1,
        borderRadius: 8,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderColor: "#E63946",
        backgroundColor: "#F1FAEE",
        marginTop: 20,
        padding: 5,
        color: "#1D3557",
        fontFamily: "Sora_400Regular",
    },
    

    inputQuantidade: {
        width: "40%",
        height: 40,
        borderWidth: 1,
        borderLeftWidth: 0,
        borderRadius: 8,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderColor: "#E63946",
        backgroundColor: "#F1FAEE",
        marginTop: 20,
        padding: 5,
        color: "#1D3557",
        fontFamily: "Sora_400Regular",
    }
})