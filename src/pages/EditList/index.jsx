import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import ListaCreated from "../../components/ListaForEditing";
import NavBarComponent from "../../components/NavBar/navBarComponent";

export default function EditListPage() {
    return (
        <View  style={styles.container}>
            <NavBarComponent />
            <ListaCreated/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFE8D6",
    }
})