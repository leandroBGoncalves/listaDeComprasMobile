import React from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerItemList, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import { Icon } from 'react-native'

import { AntDesign } from '@expo/vector-icons'; 

import ProfileImg from "../../../assets/PerfilLeandro.jpeg";


export default function CustonDrawer({ props, navigation }) {

    function AcessHome() {
        navigation.navigate("Home");
      }



    return (
        <DrawerContentScrollView style={styles.Container} {...props}>
            <TouchableOpacity style={styles.boxProfileDrawer}>
                <Image style={styles.AvatarDrawer} source={ProfileImg} />
                <Text style={styles.textProfileDrawer}>Leandro Gonçalves</Text>
            </TouchableOpacity>
            <DrawerItem
            label={({ focused, color }) => <Text style={{ color: "#1D3557", fontFamily: "Sora_700Bold", fontSize: 14 }}>{focused ? 'Home' : 'Home'}</Text>}
            icon={({ color, size }) => <AntDesign color="#1D3557" size={25} name="home"/>}
            onPress={AcessHome}
            />
        </DrawerContentScrollView>
    );
} 



const styles = StyleSheet.create({
    Container: {
        backgroundColor: "#F1FAEE",
        padding: 20,
        borderWidth: 2,
        borderColor: "#FFE8D6",

    },

    AvatarDrawer: {
        maxWidth: 50,
        maxHeight: 50,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "#1D3557",
        marginEnd: 7,
    },

    textProfileDrawer: {
        fontFamily: "Sora_700Bold",
        fontSize: 14,
        color: "#1D3557",
    },

    boxProfileDrawer: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "flex-start",
        marginBottom: 15,
    },

    labelDrawerList: {
        fontFamily: "Sora_700Bold",
        fontSize: 14,
        color: "#1D3557",
    }
})