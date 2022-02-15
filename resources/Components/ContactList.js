import React from 'react';
import {
    StyleSheet, Text, TouchableOpacity, View, PermissionsAndroid
} from 'react-native';
import Contacts from 'react-native-contacts';
import {AlphabetList} from "react-native-section-alphabet-list";

export default class ContactList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            contacts: [],
            selectedContacts: [],
            NumberOfContacts: 0,
            numberOfSelectedContacts: 0
        }
    }

    componentDidMount() {
        this.requestAccessToContactsPermission();

    }

    sendContactsNumDataToHeaderComponent = () => {
        this.setState({
            NumberOfContacts: this.state.contacts.length,
            numberOfSelectedContacts: this.state.selectedContacts.length
        }, () => {
            this.props.parentCallback(this.state.NumberOfContacts, this.state.numberOfSelectedContacts);
        })
    }

    requestAccessToContactsPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
                {
                    'title': 'Contacts',
                    'message': 'This app would like to view your contacts.',
                    'buttonPositive': 'Please accept bare mortal'
                }
            ).then(Contacts.getAll()
                .then((contactList) => this.arrangeContactsArray(contactList)).catch((e) => {
                    console.log(e)
                }))
        } catch (err) {
            console.warn(err);
        }
    }

    arrangeContactsArray(contactList) {
        let newContactsArray = [];
        contactList.map((contact, i) => {
            newContactsArray.push({'value': contact.displayName, 'key': contact.recordID, 'selected': false});
        });
        this.setState({contacts: newContactsArray}, () => {
            this.sendContactsNumDataToHeaderComponent();
        })
    }

    removeSelectedContact(array, key, value) {
        const index = array.findIndex(obj => obj[key] === value);
        return index >= 0 ? [
            ...array.slice(0, index),
            ...array.slice(index + 1)
        ] : array;
    }


    render() {
        return (

            <View>
                <View style={{flexDirection: 'row'}}>
                    {this.SelectedContactsSection()}
                </View>

                <AlphabetList
                    data={this.state.contacts}
                    initialNumToRender={5}
                    indexLetterStyle={{
                        color: '#3E8ECA',
                        fontSize: 14
                    }}
                    renderCustomItem={(item) => (
                        <TouchableOpacity
                            onPress={() => {
                                if (this.state.selectedContacts.includes(item)) {
                                    this.setState({selectedContacts: this.removeSelectedContact(this.state.selectedContacts, 'key', item.key)}, () => {
                                        this.sendContactsNumDataToHeaderComponent();
                                    })
                                } else {
                                    this.setState({selectedContacts: [...this.state.selectedContacts, item]}, () => {
                                        this.sendContactsNumDataToHeaderComponent();
                                    });
                                }
                            }}
                            style={{
                                flexDirection: 'row',
                                borderBottomColor: '#555',
                                borderBottomWidth: 1,
                                marginVertical: 5
                            }}>
                            <View style={styles.contactLetterSample}>
                                <Text>{item.value.charAt(0)}</Text>
                            </View>
                            <Text style={styles.contactItem}>{item.value}</Text>

                        </TouchableOpacity>
                    )}
                    renderCustomSectionHeader={(section) => (
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionHeaderLabel}>{section.title}</Text>
                        </View>
                    )}
                />
            </View>
        );
    }

    SelectedContactsSection() {
        return (
            this.state.selectedContacts.map((contact, i) => {
                return (
                    <View key={i} style={{alignItems: 'center', margin: 10}}>
                        <View style={styles.contactLetterSample}>
                            <Text>{contact.value.charAt(0)}</Text>
                        </View>
                        <Text style={{textAlign: 'center', color: '#fff'}}>{contact.value.substring(0, 7) + ".."}</Text>
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({selectedContacts: this.removeSelectedContact(this.state.selectedContacts, 'key', contact.key)}, () => {
                                    this.sendContactsNumDataToHeaderComponent();
                                });
                            }}
                            style={styles.removeSelectedContact}>
                            <Text style={{color: '#fff'}}>x</Text>
                        </TouchableOpacity>
                    </View>
                )
            })
        )
    }

};

const styles = StyleSheet.create({
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        backgroundColor: '#3C3A3F',
    },
    contactItem: {
        padding: 10,
        fontSize: 18,
        color: '#fff',
        marginHorizontal: 5
    },
    sectionHeaderLabel: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },
    removeSelectedContact: {
        position: 'absolute',
        backgroundColor: '#888',
        borderRadius: 100,
        height: 20,
        width: 20,
        alignItems: 'center',
        right: 5,
    },
    contactLetterSample: {
        width: 40,
        height: 40,
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100
    }
});

