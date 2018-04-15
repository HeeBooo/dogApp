/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // 第三方图标库,需要rnpm link一下

import Account from './page/Account';
import Edit from './page/Edit';
import List from './page/List';


export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'list', // 当前所选中的tab
    };
  }

  tabOnPress = index => {
    let current = 'list';
    switch (index) {
      case 0: current = 'list'; break;
      case 1: current = 'edit'; break;
      case 2: current = 'account'; break;
      default: break;
    }
    this.setState({
      selectedTab: current,
    });
  }

  render() {
    const { selectedTab } = this.state;

    return (
      <TabBarIOS
        tintColor='#ee735c' // 当前被选中的标签图标以及文字颜色
        unselectedItemTintColor='#000' // 当前没有被选中标签图标以及文字的颜色，ios10以上
        // barTintColor='yellow' // 标签栏背景颜色
      >
        <Icon.TabBarItem  // 用Icon.TabBarItem代替原生的TabBarIOS.Item
          title='list' // 图标下方的文字
          iconName='ios-videocam-outline' 
          selectedIconName='ios-videocam' // 选中时候的图片，没有outline代表不透明了
          selected={selectedTab === 'list'} // 当前是否选中
          onPress={() => { this.tabOnPress(0) }}
        >
          <List />
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title='edit'
          iconName='ios-recording-outline' 
          selectedIconName='ios-recording'
          selected={selectedTab === 'edit'}
          onPress={() => { this.tabOnPress(1) }}
        >
          <Edit />
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title='account'
          iconName='ios-more-outline'
          selectedIconName='ios-more'
          selected={selectedTab === 'account'}
          onPress={() => { this.tabOnPress(2) }}
        >
          <Account />
        </Icon.TabBarItem>
      </TabBarIOS>
    );
  }
}