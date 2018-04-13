import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

import styles from '../common';

class Edit extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text>编辑</Text>
      </View>
    );
  }
}

export default Edit;
