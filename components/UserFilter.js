import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet } from 'react-native';
// Компонент для фільтрації користувачів за віком 
const UserFilter = ({ users }) => {
    const [minAge, setMinAge] = useState('');

    const handleAgeInput = (age) => {
        setMinAge(age);
    };

    const filteredUsers = users.filter(user => user.age >= parseInt(minAge) || minAge === '');

    return (
        <View style={styles.container}>
            <TextInput style={styles.input}
                placeholder="Введіть мінімальний вік"
                value={minAge}
                onChangeText={handleAgeInput}
                keyboardType="numeric"
            />
            <FlatList
                data={filteredUsers}
                renderItem={({ item }) => (
                    <View style={styles.userItem}>
                        <Text>{item.name}</Text>
                        <Text>{item.age}</Text>
                    </View>)}
                keyExtractor={item => item.name}
            />
        </View>);
};

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            padding: 20,
            backgroundColor: '#fff',
        },
        input: {
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 20,
            paddingHorizontal: 8,
        },
        userItem: {
            padding: 10,
            fontSize: 18,
            borderBottomColor: 'gray',
            borderBottomWidth: 1,
        },
    });

export default UserFilter;