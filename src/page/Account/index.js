import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

import styles from '../common';

class Account extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text>账号</Text>
      </View>
    );
  }
}

export default Account;
