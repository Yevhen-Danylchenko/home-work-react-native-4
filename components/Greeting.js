import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const Greeting = ({ initName }) => {
    const [name, setName] = useState(initName);

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Введіть ім'я"
            />
            <Text style={styles.greeting}>Привіт, {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create (
    {
        container: {
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
            padding: 20,
            backgroundColor: '#00ff00',
        },
        input: {
            height: 40,
            borderColor: 'black',
            borderWidth: 1,
            marginBottom: 20,
            paddingHorizontal: 10,
            width: '80%',
        },
        greeting: {
            fontSize: 24,
            fontWeight: 'bold',
        },
    }
);

export default Greeting;