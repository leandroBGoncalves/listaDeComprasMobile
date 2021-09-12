import React, { useEffect, useState } from 'react';
import { ScrollView, TextInput, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { TextInputMask } from "react-native-masked-text"


export default function ShowListComponent() {
    const [isNewProduct, setIsNewProduct] = useState('');
    const [isQuantItem, setIsQuantItem] = useState('');
    const [isValueUnit, setIsValueUnit] = useState('');
    const [isValueTotal, setIsValueTotal] = useState('');
    const [valueTotalline, setValueTotalLine] = useState('');


    function isCalcValueLine() {
        setValueTotalLine(isValueUnit * isQuantItem)
    }
   


    return (
        <ScrollView style={styles.containerListEdit}>
            <View style={styles.boxAllNameColumns}>
                <View style={styles.contentColumnLeft}>
                    <Text style={styles.contentTextDescriptionColumns}>
                        Produto
                    </Text>
                </View>
                <View style={styles.contentColumnQuant}>
                    <Text style={styles.contentTextDescriptionColumns}>
                        Quant
                    </Text>
                </View>
                <View style={styles.contentColumnValUni}>
                    <Text style={styles.contentTextDescriptionColumns}>
                        Val/Uni
                    </Text>
                </View>
                <View style={styles.contentColumnValTot}>
                    <Text style={styles.contentTextDescriptionColumns}>
                        Val/Total
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
                    placeholder= 'Quant'
                    maxLength={5}
                    value={isQuantItem}
                    onChangeText={text => setIsQuantItem(text)}
                    />

                <TextInputMask 
                        style={styles.inpuValueUnit}
                        type='money'
                        placeholder="R$0,00"
                        options={{
                            precision: 2,
                            separator: ',',
                            delimiter: '.',
                            unit: 'R$',
                            suffixUnit: ''
                          }}
                        value={isValueUnit}
                        onChangeText={text => setIsValueUnit(text)}
                    />

                <TextInputMask 
                        style={styles.inpuValueTotal}
                        type='money'
                        placeholder="R$0,00"
                        options={{
                            precision: 2,
                            separator: ',',
                            delimiter: '.',
                            unit: 'R$',
                            suffixUnit: ''
                          }}
                        value={valueTotalline}
                        onChangeText={text => setIsValueTotal(text)}
                    />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    containerListEdit: {
        width: "100%",
        marginTop: 20,
        padding: "5%",
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
        width: "40%",
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        borderEndWidth: 1,
        borderEndColor: "#F1FAEE",
    },

    contentColumnQuant: {
        flexDirection: "row",
        width: "17%",
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        borderEndWidth: 1,
        borderEndColor: "#F1FAEE",
    },

    contentColumnValUni: {
        flexDirection: "row",
        width: "20%",
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        borderEndWidth: 1,
        borderEndColor: "#F1FAEE",
    },

    contentColumnValTot: {
        flexDirection: "row",
        width: "20%",
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
        width: "40%",
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
        width: "17%",
        height: 40,
        borderWidth: 1,
        borderLeftWidth: 0,
        borderRadius: 8,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderColor: "#E63946",
        backgroundColor: "#F1FAEE",
        marginTop: 3,
        padding: 5,
        color: "#1D3557",
        fontFamily: "Sora_400Regular",
    },

    inpuValueUnit: {
        width: "20%",
        height: 40,
        borderWidth: 1,
        borderLeftWidth: 0,
        borderRadius: 8,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderColor: "#E63946",
        backgroundColor: "#F1FAEE",
        marginTop: 3,
        padding: 5,
        color: "#1D3557",
        fontFamily: "Sora_400Regular",
    },

    inpuValueTotal: {
        width: "23%",
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