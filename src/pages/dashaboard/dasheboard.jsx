import React from 'react';
import { View, StyleSheet } from 'react-native';
import CardsActionsUser from '../../components/CardsActionsUser';
import NavBarComponent from '../../components/NavBar/navBarComponent';

export default function DasheboardInitial({ navigation }) {
    return (
        <View style={styles.container}>
            <NavBarComponent />
            <CardsActionsUser navigation={ navigation }/>
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