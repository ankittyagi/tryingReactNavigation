
import React, {Component} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


export default class UserDetails extends Component {
  render() {
  	const { login, email, avatar_url } = this.props.navigation.state.params;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={{uri: avatar_url}} style={styles.picture} />
                <Text style={styles.bigText}>{login}</Text>
                <Text style={[styles.mediumText, styles.lightText]}>Email : {email}</Text>
            </View>
        </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
        marginTop: 0,
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    header: {
        alignItems: 'center',
        backgroundColor: '#FAFAFF',
        paddingBottom: 4,
        borderBottomColor: '#F2F2F7',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    picture: {
        width: 200,
        height: 200,
        borderRadius: 40,
        marginTop: 20
    },
    smallPicture: {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    mediumText: {
        marginTop: 10,
    },
    bigText: {
        fontSize: 20,
        marginTop: 15,
    },
    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#AAAAAA',
    },
    list: {
        flex: 1,
    },
    lightText: {
        fontSize: 14,
        color: 'red'
    }
});