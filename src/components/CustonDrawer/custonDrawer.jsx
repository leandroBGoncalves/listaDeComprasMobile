import React from 'react';

import { View, Text, Image, StyleSheet } from 'react-native';
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';


export default function CustonDrawer(props) {
    return (
        <DrawerContentScrollView style={styles.Container} {...props}>
            <Text>cheguei</Text>
        </DrawerContentScrollView>
    );
}



const styles = StyleSheet.create({
    Container: {
        backgroundColor: "#E63946",
    }
})