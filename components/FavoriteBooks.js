import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, Pressable } from 'react-native';
// Компонент для списку улюблених книг 
const FavoriteBooks = ({ initialBooks }) => {
    const [books, setBooks] = useState(initialBooks);
    const [newBook, setNewBook] = useState('');
    const addBook = () => {
        if (newBook.trim() !== '') {
            setBooks([...books, { key: newBook }]);
            setNewBook('');
        }
    };
    return (
        <View style={styles.container}>
            <FlatList
                data={books}
                renderItem={({ item }) =>
                    <Text style={styles.item}>{item.key}</Text>} />
            <TextInput style={styles.input}
                placeholder="Додайте нову книгу"
                value={newBook}
                onChangeText={setNewBook} />
            <Pressable style={styles.button} onPress={addBook}><Text style={styles.buttonText}>Додати</Text></Pressable>
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
        item: {
            padding: 10,
            fontSize: 18,
            height: 44,
        },
        button: {
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            marginVertical: 10,
            backgroundColor: '#ddd',
            paddingHorizontal: 20,
        },
        buttonText: {
            color: 'black',
            fontSize: 18,
        },
    });

export default FavoriteBooks;