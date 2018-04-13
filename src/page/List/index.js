import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

import styles from '../common';

class List extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text>列表</Text>
      </View>
    );
  }
}

export default List;
