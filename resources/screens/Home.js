import React from 'react';
import {
    SafeAreaView, ScrollView, StyleSheet, Text, useColorScheme, View, TouchableOpacity
} from 'react-native';
import Contacts from 'react-native-contacts';

const Home: () => Node = () => {

    return (<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

        <TouchableOpacity
            onPress={() => {
                Contacts.getAll().then(contacts => {
                    // contacts returned
                })
            }}>
            <Text style={styles.Button}>Open Contact</Text>
        </TouchableOpacity>

    </View>);
};


const styles = StyleSheet.create({
    Button: {
        backgroundColor: '#333', textAlign: 'center', color: '#fff', padding: 20, fontSize: 18,
    }
});

export default Home;
