/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    StyleSheet, Text, useColorScheme, View, TouchableOpacity, TextInput
} from 'react-native';

const Header: () => Node = () => {

    return (
        <View style={{backgroundColor: '#39373A'}}>
            <View style={styles.Header}>
                <TouchableOpacity>
                    <Text style={styles.HeaderButtons}>Cancel</Text>
                </TouchableOpacity>

                <View style={{alignItems: 'center'}}>
                    <Text style={styles.HeaderTitle}>Add Participants</Text>
                    <Text style={styles.HeaderContactCount}>2 / 234</Text>
                </View>
                <TouchableOpacity>
                    <Text style={styles.HeaderButtons}>Next</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TextInput style={styles.HeaderSearch}
                placeholder='Search'/>
            </View>
        </View>

    );
};


const styles = StyleSheet.create({
    Header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    HeaderSearch: {
        borderColor: '#000',
        borderWidth: .4,
        margin: 10,
        borderRadius: 10,
        color: '#fff'
    },
    HeaderTitle: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },
    HeaderContactCount: {
        fontSize: 14,
        color: '#fff'
    },
    HeaderButtons: {
        color: '#3E8ECA',
        padding: 10,
        fontWeight: 'bold'
    }
});

export default Header;
