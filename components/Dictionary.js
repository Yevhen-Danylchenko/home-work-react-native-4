import React, { useState } from "react";
import { View, TextInput, FlatList, Text, StyleSheet } from "react-native";

const Dictionary = ({ words }) => {
    const [text, setText] = useState('');

    const searchWords = words.filter(word =>
        word.word.toLowerCase().includes(text.toLowerCase())
    );

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Пошук слова"
                value={text}
                onChangeText={setText}
            />
            <FlatList
            data={searchWords}
            renderItem={({ item }) => (
                <View style={styles.item}>
                    <Text style={styles.word}>{item.word}</Text>
                    <Text style={styles.translation}>{item.translation}</Text>
                </View>
            )}
            keyExtractor={item => item.word}
            />
        </View>
    );
};

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            padding: 20,
            backgroundColor: 'rgb(119, 185, 119)',
        },
        input: {
            height: 40,
            borderColor: 'green',
            borderWidth: 1,
            marginBottom: 20,
            paddingHorizontal: 8,
        },
        item: {
            padding: 10,
            fontSize: 20,
            borderBottomColor: 'green',
            borderBottomWidth: 1,
        },
        word: {
            fontWeight: 'bold',
        },
        translation: {
            color: 'green',
        }
    },
);

export default Dictionary;
