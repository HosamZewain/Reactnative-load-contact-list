/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import Header from './../Components/Header';
import ChosenContactsSection from './../Components/ChosenContactsSection';
import ContactList from './../Components/ContactList';

const Home: () => Node = () => {

    return (
        <SafeAreaView style={{backgroundColor: "#222", flex: 1}}>
            <Header/>
            <ChosenContactsSection/>
            <ContactList style={{flex: 1}}/>

        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    Button: {
        backgroundColor: '#00f',
        textAlign: 'center',
    }
});

export default Home;
