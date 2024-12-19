import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, Pressable } from 'react-native';
const ShoppingList = () => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');
    
    const addItem = () => {
        if (newItem.trim() !== '') {
            setItems([...items, newItem]);
            setNewItem('');
        }
    };
    
    return (
        <View style={styles.container}>
            <TextInput style={styles.input}
                placeholder="Додайте новий елемент"
                value={newItem}
                onChangeText={setNewItem} />
            <Pressable style={styles.button} onPress={addItem}><Text style={styles.buttonText}>Додати</Text></Pressable>
            
            <FlatList
                data={items}
                renderItem={({ item, index }) => (
                    <View style={styles.item}>
                        <Text>{`${index + 1}. ${item}`}</Text>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()} />
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
            borderBottomColor: 'gray',
            borderBottomWidth: 1,
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
    
export default ShoppingList;