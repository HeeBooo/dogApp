import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableHighlight, Image, Dimensions } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window'); // 获取屏幕宽度
console.log(`屏幕宽度:${width}`);

class List extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      listData: [
        {
          id: '1',
          key: '1',
          title: 'title1',
          thumb: 'http://a0.att.hudong.com/30/88/01100000000000144726882521407_s.jpg',
        },
        {
          id: '2',
          key: '2',
          title: 'title2',
          thumb: 'http://a0.att.hudong.com/30/88/01100000000000144726882521407_s.jpg',
        },
        {
          id: '3',
          key: '3',
          title: 'title3',
          thumb: 'http://a0.att.hudong.com/30/88/01100000000000144726882521407_s.jpg',
        },
      ],
    };
  }

  renderFlatListItem = ({ item }) => (
    <TouchableHighlight>
      <View style={styles.item}>
        <Text style={styles.title}>{item.title}</Text>
        <Image
          style={styles.thumb}
          source={{ uri: item.thumb }} // ios9以后默认只支持https格式的请求，要请求http需要在info.plist，中在，App Transport Security Settings中添Allow Arbitrary Loads，设置为yes
        >
          <Icon
            style={styles.play}
            name='ios-play'
            size={28}
          />
        </Image>
        <View style={styles.itemFooter}>
          <View style={styles.handleBox}>
            <Icon
              style={styles.handleIcon}
              name='ios-heart-outline'
              size={28}
            />
            <Text style={styles.handleText}>喜欢</Text>
          </View>
          <View style={styles.handleBox}>
            <Icon
              style={styles.handleIcon}
              name='ios-chatboxes-outline'
              size={28}
            />
            <Text style={styles.handleText}>评论</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  )

  render() {
    const { listData } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>列表</Text>
        </View>
        <FlatList
          data={listData}
          renderItem={this.renderFlatListItem}
          automaticallyAdjustContentInsets={false}  // 设置为fasle后第一个list上面就没间隙了
        >
        </FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5fcff',
  },
  header: {
    paddingTop: 25,
    paddingBottom: 12,
    backgroundColor: '#ee735c',
  },
  headerTitle: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  item: {
    width: width,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  title: {
    padding: 10,
    fontSize: 18,
    color: '#333',
  },
  thumb: {
    width: width,
    height: width * .5,
    resizeMode: 'cover',
  },
  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#eee',
  },
  handleBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: width / 2 - .5,
    padding: 10,
    backgroundColor: '#fff',
  },
  play: {
    position: 'absolute',
    bottom: 14,
    right: 14,
    width: 46,
    height: 46,
    paddingTop: 9,
    paddingLeft: 18,
    backgroundColor: 'transparent',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 23,
    color: '#ed7b66',
  },
  handleText: {
    paddingLeft: 12,
    fontSize: 18,
    color: '#333',
  },
  handleIcon: {
    fontSize: 22,
    color: '#333',
  },
});

export default List;
