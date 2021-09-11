import React, { useEffect, useState } from 'react';

import { ScrollView, TextInput, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 


export default function ListaCreated() {
    const [isNewProduct, setIsNewProduct] = useState('');
    const [isQuantItem, setIsQuantItem] = useState('');
    const [isNewline, setIsNewLine] = useState(false);

    function toglleStateNewList(){
        setIsNewLine(true);
        setTimeout( () => {setIsNewLine(false);}, 1000);
    }
   


    return (
        <ScrollView style={styles.containerListEdit}>
            <View style={styles.boxAllNameColumns}>
                <View style={styles.contentColumnLeft}>
                    <Text style={styles.contentTextDescriptionColumns}>
                        Produto
                    </Text>
                </View>
                <View style={styles.contentColumnRigth}>
                    <Text style={styles.contentTextDescriptionColumns}>
                        Quantidade
                    </Text>
                </View>
            </View>
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
            {isNewline &&

                    <View style={styles.boxImputLineNew}>
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
            }
            <View style={styles.boxAllIconPlus}>
                <TouchableOpacity style={styles.boxContentIconPlus}>
                    <Entypo 
                    name="plus" 
                    size={40} 
                    color="#1d3557" 
                    onPress={toglleStateNewList}
                    />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    containerListEdit: {
        width: "100%",
        marginTop: 20,
        padding: "10%",
        maxHeight: 550,
    },

    boxAllNameColumns: {
        flexDirection: "row",
        width: "100%",
        height: 40,
        backgroundColor: "#1d3557",
        borderRadius: 8,
        borderColor: "#E63946",
        borderWidth: 1,
        alignItems: "center",
    },

    contentColumnLeft: {
        flexDirection: "row",
        width: "60%",
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        borderEndWidth: 1,
        borderEndColor: "#F1FAEE",
    },

    contentColumnRigth: {
        flexDirection: "row",
        width: "40%",
        height: 30,
        alignItems: "center",
        justifyContent: "center",
    },

    contentTextDescriptionColumns: {
        fontFamily: "Sora_400Regular",
        fontSize: 14,
        color: "#F1FAEE",
    },

    boxImputLine: {
        flexDirection: "row",
        marginTop: 20,
    },

    boxImputLineNew: {
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
        marginTop: 3,
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
        marginTop: 3,
        padding: 5,
        color: "#1D3557",
        fontFamily: "Sora_400Regular",
    },

    boxAllIconPlus: {
        flexDirection: "row",
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },

    boxContentIconPlus: {
        flexDirection: "row",
        width: "12%",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#06D6A0",
        borderRadius: 40,
    }
})