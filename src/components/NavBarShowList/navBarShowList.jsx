import React, { Component } from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";

import { FontAwesome } from '@expo/vector-icons'; 

import MyLogoImg from "../../../assets/logoMenor.png";
import ProfileImg from "../../../assets/PerfilLeandro.jpeg";

export default function NavBarShow() {
    return (
        <View style={styles.containerNav}>
            <View style={styles.contentNav}>
                <View>
                    <Image style={{ width: 100, height: 55 }} source={MyLogoImg} />
                </View>
                <TouchableOpacity style={styles.boxButtonSave}>
                    <FontAwesome name="save" size={24} color="#1D3557" />
                    <Text style={styles.titleSaveList}>Salvar lista</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    containerNav: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",        
        marginTop: 2,

    },

    contentNav: {
        flexDirection: "row",
        width: "88%",
        height: 85,
        backgroundColor: "#E63946",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        borderRadius: 13,
        shadowColor: "#000",
        shadowOffset: {
        	width: 0,
        	height: 7,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },

    contentProfile: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",   
    },

    avatarProfile: {
        maxWidth: 30,
        maxHeight: 30,
        borderWidth: 1,
        borderColor: "#1D3557",
        borderRadius: 50,
        marginRight: 3,
    },

    textProfileName: {
        fontFamily: "Sora_700Bold",
        fontSize: 14,
        color: "#1D3557",
    },

    boxButtonSave: {
        flexDirection: "row",
        backgroundColor: "#06D6A0",
        width: "35%",
        height: "50%",
        alignItems: "center",
        justifyContent: "space-between",
        paddingEnd: 10,
        paddingStart: 10,
        borderRadius: 6,
        borderColor: "#E63946",
        borderWidth: 3,
        marginBottom: "-23%",
    },

    titleSaveList: {
        color: "#1D3557",
        fontFamily: "Sora_600SemiBold",
        fontSize: 12,
    }
})