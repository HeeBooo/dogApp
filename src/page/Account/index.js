import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Account extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text>账号</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 50,
  },
  instructions: {
    textAlign: 'center',
    color: '#333',
    marginBottom: 5,
  },
});

export default Account;
