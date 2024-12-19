import React, { useState } from "react";
import { View, Text, TextInput,Pressable, FlatList, StyleSheet } from "react-native";

const Contacts = ({ initContacts }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [contacts, setContacts] = useState(initContacts);

    const addContact = () => {
        if (name && phone) {
            setContacts([...contacts, { name, phone }]);
            setName('');
            setPhone('');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Ім'я"
            />
            <TextInput 
                style={styles.input}
                value={phone}
                onChangeText={setPhone}
                placeholder="Телефон"
                keyboardType="phone-pad"
            />
            <Pressable onPress={addContact} style={styles.button}>
                <Text style={styles.buttonText}>Додати контакт</Text>
            </Pressable>
            <FlatList
                data={contacts}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.contact}>
                        <Text style={styles.contactText}>Ім'я: {item.name}</Text>
                        <Text style={styles.contactText}>Телофон: {item.phone}</Text>
                    </View>
                )}
            />
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
            backgroundColor: '#fff24c',
        },
        input: {
            height: 40,
            borderColor: 'black',
            borderWidth: 1,
            marginBottom: 10,
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
        contact: {
            padding: 10,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            width: '100%',
        },
        contactText: {
            fontSize: 16,
        },
    }
);

export default Contacts;