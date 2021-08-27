import React, { Component } from "react";
import { Image, Text, View, StyleSheet } from "react-native";

import MyLogoImg from "../../../assets/logoMenor.png";
import ProfileImg from "../../../assets/PerfilLeandro.jpeg";

export default function NavBarComponent() {
    return (
        <View style={styles.containerNav}>
            <View style={styles.contentNav}>
                <View>
                    <Image style={{ width: 100, height: 55 }} source={MyLogoImg} />
                </View>
                <View style={styles.contentProfile}>
                    <Image style={styles.avatarProfile} source={ProfileImg}/>
                    <Text style={styles.textProfileName}>
                        Leandro
                    </Text>
                </View>
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
        maxWidth: 40,
        maxHeight: 40,
        borderWidth: 1,
        borderColor: "#1D3557",
        borderRadius: 50,
        marginRight: 3,
    },

    textProfileName: {
        fontFamily: "Sora_700Bold",
        fontSize: 14,
        color: "#1D3557",
    }
})