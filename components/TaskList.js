import React, { useState } from "react";
import { View, TextInput, FlatList, Text, StyleSheet } from "react-native";

// Компонент для відображення списку справ за категоріями

const TaskList = ({ tasks }) => {
    const [searchCategory, setSearchCategory] = useState('');

    const searchTask = searchCategory ? tasks.filter(task =>
        task.category === searchCategory) : tasks;
    

    // Завдання за категоріями

    const groupTasks = searchTask.reduce((groups, task) => {
        const category = task.category ? task.category : 'another';
        if(!groups[category]) {
            groups[category] = [];
        }       
        groups[category].push(task);
        return groups;
        
    }, {});

    const renderTask = ({ item }) => (
        <View style={styles.task}>
            <Text>{item.task}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <TextInput
                style = {styles.input}
                placeholder="Фільтрувати за категорією"
                value = {searchCategory}
                onChange={setSearchCategory}
            />
            {Object.keys(groupTasks).map(category => (
                <View key = {category} style = {styles.category}>
                    <Text style = {styles.categoryTitle}>{category}</Text>
                    <FlatList
                        data = {groupTasks[category]}
                        renderItem={renderTask}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            padding: 30,
            backgroundColor: '#fff02c',
        },
        input: {
            height: 40,
            borderColor: 'black',
            borderWidth: 1,
            marginBottom: 20,
            paddingHorizontal: 8,
        },
        category: {
            marginBottom: 20,
        },
        categoryTitle: {
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 10,
        },
        task: {
            padding: 10,
            fontSize: 16,
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
        },
    }
);

export default TaskList;