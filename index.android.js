import React  from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';

import { StackNavigator } from 'react-navigation';

class ReactNavigationExample extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>First welcome screen</Text>
        <Button
          onPress={() => navigate('Second', { data: 'data from home screen' })}
          title="Next Screen"
        />
      </View>
    );
  }
}
class SecondScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Content of second screen</Text>
        <Text>{this.props.navigation.state.params.data}</Text>
      </View>
    );
  }
}


const RootNavigator = StackNavigator({
  Home: { 
    screen: ReactNavigationExample,
    navigationOptions: {
      title: 'Home Screen',
    }
  },
  Second: { 
    screen: SecondScreen,
    navigationOptions: {
      title: 'Second Screen',
    }
  },
}, {
  mode: 'card',
  headerMode: 'float',
});



AppRegistry.registerComponent('ReactNavigationExample', () => RootNavigator);
