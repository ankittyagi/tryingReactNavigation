import React from 'react';
import { StackNavigator } from 'react-navigation';

import UsersList from './UsersList';
import UserDetails from './UserDetails';

export const Root = StackNavigator({
  UsersList: {
    screen: UsersList,
    navigationOptions: {
      title: 'UserList',
    },
  },
  UserDetails: {
    screen: UserDetails,
    navigationOptions: {
      title: 'UserDetails'
    },
  },
});
