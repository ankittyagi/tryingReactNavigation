import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableHighlight,
  StyleSheet, 
  Image

} from 'react-native';
import SearchBar from './searchBar'
// import { users } from './data';

import * as userService from './services';    

export default class UsersList extends Component {

  constructor(props) {
        super(props);

        this.state = { users: '', loading: true } ;
    }
  componentWillMount(){
     userService.findAll().then(users => {
            console.log("initial users fetched from api");
            this.setState({ 
                users: users,
                loading: false
            });
        });

  }
  onListItemClick = (user) => {
    this.props.navigation.navigate('UserDetails', { ...user });
  }

  search(key){
    this.setState({
            loading: true
        });
    userService.findUsersByName(key).then(users => {
        console.log("search data recieved");
        this.setState({ 
            users: users.items,
            loading: false
        });
    });
  }

  render() {
    return (

      <ScrollView>
        <SearchBar keyToSearch={(item)=> {this.search(item)}} />
        <FlatList
          data={this.state.users}
          renderItem={({item}) => (
            <TouchableHighlight onPress={() => this.onListItemClick(item)} underlayColor={'#EEEEEE'}>
               <View style={styles.container}>
                    <Image source={{uri: item.avatar_url}} style={styles.picture} />
                    <View>
                        <Text style={styles.imageText}>{item.login} </Text>
                    </View>
                </View>
            </TouchableHighlight>
          )
        }
        />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 8
    },
    picture: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 8
    },
    imageText: {
        padding:10
    },
    title: {
        color: '#848484'
    }
});