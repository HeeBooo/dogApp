/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  Icon,
} from 'react-native';

import Account from './page/Account';
import Edit from './page/Edit';
import List from './page/List';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'list',
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
        tintColor='red' // 当前被选中的标签图标以及文字颜色
        unselectedItemTintColor='#000' // 当前没有被选中标签图标以及文字的颜色，ios10以上
        barTintColor='yellow' // 标签栏背景颜色
      >
        <TabBarIOS.Item
          title='list' // 图标下方小标题
          selected={selectedTab === 'list'} // 当前是否选中
          onPress={() => { this.tabOnPress(0) }}
        >
          <List />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title='edit'
          selected={selectedTab === 'edit'}
          onPress={() => { this.tabOnPress(1) }}
        >
          <Edit />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title='account'
          selected={selectedTab === 'account'}
          onPress={() => { this.tabOnPress(2) }}
        >
          <Account />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}