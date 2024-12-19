import React, { useState } from "react";
import { View, Text, TextInput, FlatList, StyleSheet } from "react-native";

const QuestionList = ({ questions }) => {
    const [answers, setAnswers] = useState({});

    const handleAnswerChange = (id, text) => {
        setAnswers({...answers, [id]: text});
    };

    const renderQuest = ({ item }) => (
        <View style={styles.questionsContainer}>
            <Text style={styles.questionsText}>{item.questions}</Text>
            <TextInput
                style={styles.input}
                value={answers[item.id] || ''}
                onChangeText={(text) => handleAnswerChange(item.id, text)}
                placeholder={item.question}
            />
            <Text style={styles.answersText}>
                Ваша відповідь: {answers[item.id] || ''}
            </Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={questions}
                renderItem={renderQuest}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            padding: 20,
            backgroundColor: '#00ff00',
        },
        questionsContainer: {
            marginBottom: 20,
        },
        questionsText: {
            fontSize: 18,
            fontWeight: 'bold',
        },
        input: {
            height: 40,
            borderColor: 'black',
            borderWidth: 1,
            marginTop: 10,
            paddingHorizontal: 8,
        },
        answersText: {
            marginTop: 10,
            fontStyle: 'italic',
        },
    }
);

export default QuestionList;