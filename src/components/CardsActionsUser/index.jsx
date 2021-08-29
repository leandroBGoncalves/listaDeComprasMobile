import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

import { MaterialIcons } from '@expo/vector-icons';

export default function CardsActionsUser({ navigation }) {

    function AcessEditList() {
        navigation.navigate('EditList');
    }


    return (
        <ScrollView style={styles.containerCards}>
            <View style={styles.contentCardsInterna}>
                <View style={styles.card}>
                    <TouchableOpacity 
                    style={styles.touchBox}
                    onPress={AcessEditList}
                    >
                        <MaterialIcons name="playlist-add" size={60} style={styles.iconCards} />
                        <Text style={styles.textCards}>Criar nova lista</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    containerCards: {
        width: "100%",
        height: "100%",
        margin: 0,
        padding: 0,
    },

    contentCardsInterna: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        margin: 0,
        padding: 0,
        paddingBottom: 25,
    },

    card: {
        backgroundColor: "#F1FAEE",
        borderWidth: 2,
        borderColor: "#F1FAEE",
        width: "88%",
        borderRadius: 13,
        height: 150,
        marginTop: 25,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
        	width: 0,
        	height: 7,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },

    touchBox: {
        width: "100%",
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

    iconCards: {
        color: "#E63946",
    },

    textCards: {
        color: "#E63946",
        fontSize: 20,
        fontFamily: "Sora_700Bold",
        marginLeft: 5,
    },
})