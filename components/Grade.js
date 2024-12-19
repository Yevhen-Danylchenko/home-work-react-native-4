import React, { useState } from "react";
import { View, Text, TextInput, Pressable, FlatList, StyleSheet } from "react-native";

const Grade = () => {
    const [grade, setGrade] = useState('');
    const [grades, setGrades] = useState([]);

    const addGrade = () => {
        const numberGrade = parseFloat(grade);
        if (!isNaN(numberGrade)) {
            setGrades([...grades, numberGrade]);
            setGrade('');
        }
    };

    const averGrade = () => {
        if (grades.length === 0) {
            return 0;
        }
        const sum = grades.reduce((a,b) => a + b, 0);
        return (sum / grades.length).toFixed(2);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={grade}
                onChangeText={setGrade}
                placeholder="Введіть оцінку"
                keyboardType="numeric"
            />
            <Pressable onPress={addGrade} style={styles.button}>
                <Text style={styles.buttonText}>Додати оцінку</Text>
            </Pressable>
            {grades.length > 0 && (
                <>
                <FlatList 
                    data={grades.map((g, index) => ({
                        key: index.toString(),
                        grade: g
                    }))}
                    renderItem={({ item }) => <Text>Оцінка: {item.grade}</Text>}
                />
                <Text style={styles.average}>Середній бал: {averGrade()}</Text>
                </>
            )}
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
            borderColor: '#00FF00',
        },
        input: {
            height: 49,
            borderColor: 'black',
            borderWidth: 1,
            marginBottom: 20,
            paddingHorizontal: 10,
            width: '80%',
        },
        button: {
            backgroundColor: '#007bff',
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 5,
            marginBottom: 20,
        },
        buttonText: {
            color: '#fff',
            fontSize: 16,
        },
        average: {
            marginTop: 20,
            fontSize: 18,
            fontWeight: 'bold',
        },
    }
);

export default Grade;