import React from "react";
import { View, StyleSheet } from "react-native";
import NavBarShow from "../../components/NavBarShowList/navBarShowList";
import ShowListComponent from "../../components/ShowList";

export default function ShowList() {
    return (
        <View  style={styles.container}>
            <NavBarShow />
            <ShowListComponent />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFE8D6",
    }
})