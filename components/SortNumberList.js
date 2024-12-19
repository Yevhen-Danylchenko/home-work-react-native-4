import React, { useState } from "react";
import { View, Text, Pressable, FlatList, StyleSheet } from "react-native";

const SortNumberList = ({ numbers }) => {
    const [sortNumb, setSortNumb] = useState(numbers);
    const [sorting, setSorting] = useState(true);

    const sortNumber = () => {
        const sorted = [...sortNumb].sort((a, b) => (sorting ? a - b : b - a));
        setSortNumb(sorted);
        setSorting(!sorting);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={sortNumb.map((num, index) => ({ key: index.toString(), value: num }))}
                renderItem={({ item }) => (
                    <View style={styles.numberItem}>
                        <Text>{item.value}</Text>
                    </View>
                )}
            />
            <Pressable onPress={sortNumber} style={styles.button}>
                <Text style={styles.buttonText}>
                    Сортувати {sorting ? 'за зростанням' : 'за зменьшенням'}
                </Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            padding: 20,
            backgroundColor: '#fff07c',
        },
        numberItem: {
            padding: 10,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
        },
        button: {
            backgroundColor: '#007bff',
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 5,
            marginTop: 20,
        },
        buttonText: {
            color: '#fff',
            fontSize: 16,
        },
    }
);

export default SortNumberList;