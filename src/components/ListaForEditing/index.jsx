import React, { useState } from 'react';

import { ScrollView, TextInput, StyleSheet } from 'react-native';


export default function ListaCreated() {
    const [isNewProduct, setIsNewProduct] = useState('');
    const [isQuantItem, setIsQuantItem] = useState('');

    return (
        <ScrollView style={styles.containerListEdit}>
            <TextInput
            style={styles.inputProduct}
            keyboardType= "name-phone-pad"
            placeholder= 'Produto'
            value={isNewProduct}
            onChangeText={text => setIsNewProduct(text)}
            />

        <TextInput 
                style={styles.inputQuantidade}
                keyboardType= "numeric"
                placeholder= 'Quantidade'
                value={isQuantItem}
                onChangeText={text => setIsQuantItem(text)}
                />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    containerListEdit: {
        width: "100%",
        marginTop: 20,
        padding: 0,
    },

    inputProduct: {

    },

    inputQuantidade: {
        
    }
})