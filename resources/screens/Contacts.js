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
} from 'react-native';
import Header from './../Components/Header';
import ContactList from './../Components/ContactList';

class Home extends React.Component {
    state = {TotalContacts: '', selected: ''}
    callbackFunction = (TotalContacts, selected) => {
        this.setState({TotalContacts: TotalContacts, selected: selected})
    }

    render() {
        return (
            <SafeAreaView style={{backgroundColor: "#333"}}>
                <Header TotalContacts={this.state.TotalContacts} selected={this.state.selected}/>
                <ContactList parentCallback={this.callbackFunction}/>

            </SafeAreaView>
        );
    }
};

export default Home;
