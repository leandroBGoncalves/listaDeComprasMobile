import React from 'react';
import { View, StyleSheet } from 'react-native';
import NavBarComponent from '../../components/NavBar/navBarComponent';

export default function DasheboardInitial() {
    return (
        <View style={styles.container}>
            <NavBarComponent />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: "#FFE8D6",
        alignItems: "center",
      },
})