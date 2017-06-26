import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {username:''};
    }
    render() {
        let parent = this;
        return (
            <TextInput
                    style={styles.input}
                    placeholder="search here ..."
                    
                    onChangeText={(username) => this.setState({username})}
                    value={this.state.username}
                    onKeyPress={
                        (e)=> {
                            if (e.nativeEvent.key == "Enter") {
                              parent.props.keyToSearch(parent.state.username)
                            }
                        }
                    }
                />  
        )
    }
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
    },
});

