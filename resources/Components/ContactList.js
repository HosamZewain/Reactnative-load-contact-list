/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    StyleSheet, Text, useColorScheme, View, PermissionsAndroid, SectionList, Image
} from 'react-native';
import Contacts from 'react-native-contacts';


const ContactList: () => Node = () => {
    PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
            'title': 'Contacts',
            'message': 'This app would like to view your contacts.',
            'buttonPositive': 'Please accept bare mortal'
        }
    )


    return (
        <View>

            <SectionList
                sections={[
                    {
                        title: 'H',
                        data: [
                            {
                                image: 'https://wtop.com/wp-content/uploads/2018/12/2018TeddyGelmanNOV8-51-150x150.jpg',
                                name: 'Hosam'
                            },
                            {image: 'https://news.stv.tv/wp-content/uploads/2021/03/5e66fe23e83e012c303bee319b943964-256x256.jpg', name: 'Hanan'},
                            {image: 'https://wtop.com/wp-content/uploads/2018/12/2018TeddyGelmanNOV8-51-150x150.jpg', name: 'Hayam'},
                            {image: 'https://wtop.com/wp-content/uploads/2018/12/2018TeddyGelmanNOV8-51-150x150.jpg', name: 'Haitham'},
                            {
                                image: 'https://wtop.com/wp-content/uploads/2018/12/2018TeddyGelmanNOV8-51-150x150.jpg',
                                name: 'Hosam'
                            },
                            {image: 'https://news.stv.tv/wp-content/uploads/2021/03/5e66fe23e83e012c303bee319b943964-256x256.jpg', name: 'Hanan'},
                            {image: 'https://wtop.com/wp-content/uploads/2018/12/2018TeddyGelmanNOV8-51-150x150.jpg', name: 'Hayam'},
                            {image: 'https://wtop.com/wp-content/uploads/2018/12/2018TeddyGelmanNOV8-51-150x150.jpg', name: 'Haitham'},
                        ]
                    },

                    {
                        title: 'D', data: [
                            {image: 'https://news.stv.tv/wp-content/uploads/2021/03/5e66fe23e83e012c303bee319b943964-256x256.jpg', name: 'Devin'},
                            {image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', name: 'Dan'},
                            {image: 'https://news.stv.tv/wp-content/uploads/2021/03/5e66fe23e83e012c303bee319b943964-256x256.jpg', name: 'Dominic'},
                            {image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', name: 'Dan'},
                            {image: 'https://news.stv.tv/wp-content/uploads/2021/03/5e66fe23e83e012c303bee319b943964-256x256.jpg', name: 'Devin'},
                            {image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', name: 'Dan'},
                            {image: 'https://news.stv.tv/wp-content/uploads/2021/03/5e66fe23e83e012c303bee319b943964-256x256.jpg', name: 'Dominic'},
                            {image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', name: 'Dan'},
                        ]
                    },
                ]}
                renderItem={({item}) => {
                    return(
                        <View style={{flexDirection: 'row', margin: 0}}>
                            <Image source={{uri: item.image}}
                                   style={{width: 45, height: 45, borderRadius: 100}}/>
                            <Text style={styles.item}>{item.name}</Text>
                        </View>
                    )
                }

            }
                renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                keyExtractor={(item, index) => index}
            />

        </View>

    );
};


const styles = StyleSheet.create({
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: '#3C3A3F',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        color: '#fff'
    },
});

export default ContactList;
