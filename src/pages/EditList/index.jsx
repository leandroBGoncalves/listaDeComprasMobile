import React from "react";
import { View, StyleSheet } from "react-native";
import ListaCreated from "../../components/ListaForEditing";
import NavBarList from "../../components/NavBarList/navBarList";

export default function EditListPage({ navigation }) {


    function AcessShowList() {
        navigation.navigate('ShowList');
    }

    return (
        <View  style={styles.container}>
            <NavBarList openShowList={AcessShowList}/>
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