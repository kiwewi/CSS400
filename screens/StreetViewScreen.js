import React, {  } from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
console.disableYellowBox = true;

const StreetViewScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Street View Mock Up</Text>
        </SafeAreaView>
    );
}

export default StreetViewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 20,
        justifyContent: "center",
    },
});