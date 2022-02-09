/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    StyleSheet, Text, useColorScheme, View, TouchableOpacity, TextInput, Image
} from 'react-native';

const ChosenContactsSection: () => Node = () => {

    return (
        <View style={{flexDirection: 'row'}}>
            <View style={{alignItems: 'center', margin: 10}}>
                <Image source={require('./../imgs/person1.jpg')}
                       style={{width: 60, height: 60, borderRadius: 100}}/>
                <Text style={{textAlign: 'center', color: '#fff'}}>Hosam Zew..</Text>
                <TouchableOpacity style={{
                    position: 'absolute',
                    backgroundColor: '#888',
                    borderRadius: 100,
                    height: 20,
                    width: 20,
                    alignItems: 'center',
                    right: 5
                }}>
                    <Text style={{color: '#fff'}}>x</Text>
                </TouchableOpacity>
            </View>


            <View style={{alignItems: 'center', margin: 10}}>
                <Image source={require('./../imgs/person3.jpg')}
                       style={{width: 60, height: 60, borderRadius: 100}}/>
                <Text style={{textAlign: 'center', color: '#fff'}}>Hosam Zew..</Text>
                <TouchableOpacity style={{
                    position: 'absolute',
                    backgroundColor: '#888',
                    borderRadius: 100,
                    height: 20,
                    width: 20,
                    alignItems: 'center',
                    right: 5
                }}>
                    <Text style={{color: '#fff'}}>x</Text>
                </TouchableOpacity>
            </View>

            <View style={{alignItems: 'center', margin: 10}}>
                <Image source={require('./../imgs/person4.jpg')}
                       style={{width: 60, height: 60, borderRadius: 100}}/>
                <Text style={{textAlign: 'center', color: '#fff'}}>Hosam Zew..</Text>
                <TouchableOpacity style={{
                    position: 'absolute',
                    backgroundColor: '#888',
                    borderRadius: 100,
                    height: 20,
                    width: 20,
                    alignItems: 'center',
                    right: 5
                }}>
                    <Text style={{color: '#fff'}}>x</Text>
                </TouchableOpacity>
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

export default ChosenContactsSection;
