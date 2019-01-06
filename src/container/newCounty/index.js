import React, {Component} from 'react'
import {StyleSheet, Text, View, TextInput, FlatList, TouchableHighlight, ScrollView, SafeAreaView} from 'react-native'
import { connectView } from '../../hoc'

let myData = {
  'A': [{
    title: 'aaa'
  }, {
    title: 'aaa'
  }, {
    title: 'aaa'
  }],
  'B': [{
    title: 'bbb'
  }, {
    title: 'bbb'
  }, {
    title: 'bbb'
  }],
  'C': [{
    title: 'bbb'
  }, {
    title: 'bbb'
  }, {
    title: 'bbb'
  }],
  'D': [{
    title: 'bbb'
  }, {
    title: 'bbb'
  }, {
    title: 'bbb'
  }],
  'E': [{
    title: 'bbb'
  }, {
    title: 'bbb'
  }, {
    title: 'bbb'
  }],
  'F': [{
    title: 'bbb'
  }, {
    title: 'bbb'
  }, {
    title: 'bbb'
  }],
  'G': [{
    title: 'bbb'
  }, {
    title: 'bbb'
  }, {
    title: 'bbb'
  }],
  'H': [{
    title: 'bbb'
  }, {
    title: 'bbb'
  }, {
    title: 'bbb'
  }],

  'I': [{
    title: 'bbb'
  }, {
    title: 'bbb'
  }, {
    title: 'bbb'
  }],
  'G': [{
    title: 'bbb'
  }, {
    title: 'bbb'
  }, {
    title: 'bbb'
  }],
  'K': [{
    title: 'bbb'
  }, {
    title: 'bbb'
  }, {
    title: 'bbb'
  }],
  'L': [{
    title: 'bbb'
  }, {
    title: 'bbb'
  }, {
    title: 'bbb'
  }],
  'M': [{
    title: 'bbb'
  }, {
    title: 'bbb'
  }, {
    title: 'bbb'
  }],
  'N': [{
    title: 'bbb'
  }, {
    title: 'bbb'
  }, {
    title: 'bbb'
  }],
  'O': [{
    title: 'bbb'
  }, {
    title: 'bbb'
  }, {
    title: 'bbb'
  }],
  'P': [{
    title: 'bbb'
  }, {
    title: 'bbb'
  }, {
    title: 'bbb'
  }],
  'Q': [{
    title: 'bbb'
  }, {
    title: 'bbb'
  }, {
    title: 'bbb'
  }],
  'R': [{
    title: 'bbb'
  }, {
    title: 'bbb'
  }, {
    title: 'bbb'
  }],
}

class NewCounty extends Component{
  static navigationOptions = () => ({
    title: 'newCounty',
    header: null
  })
  state={
    backUpObj: myData,
    listKes: Object.keys(myData),
    dataList: myData,
    searchInput: ''
  }
  countyPress = (key,value) => {
    const { replace } = this.props.navigation
    replace('Home',{
      key,
      value
    })
    // console.warn(key, value)
  }
  renderListView = () => {
    const { listKes, dataList } = this.state
    return listKes.map((item, index) => {
      return (
        <View key={index} style={styles.county} key={index} >
          <Text style={styles.countyTitle}>{item}</Text>
          {dataList[item].map((_item, _index) => {
            return (
              <TouchableHighlight
                onPress={this.countyPress.bind(this, item,_item)}
                underlayColor={'rgba(0,0,0,.1)'}
                key={_index}
              >
              <Text style={styles.countyList} >{_item.title}</Text>
              </TouchableHighlight>
            )
          })}
        </View>
      )
    })
  }
  inputChange = (e) => {
    const { listKes, backUpObj } = this.state
    let obj = {}
    if (e === '') {
      this.setState({
        listKes: Object.keys(backUpObj),
        searchInput: e,
        dataList: backUpObj,
      })
      return false
    }
    Object.keys(backUpObj).map(item => {
      let z = myData[item].filter(item => item.title.indexOf(e) != -1)
      if(z.length >0 ) {
        obj[item] = z
      }
      return item
    })
    this.setState({
      listKes: Object.keys(obj),
      searchInput: e,
      dataList: obj
    })
  }
  // _onPress = (i) => {
  //   console.warn(i)
  // }
  render() {
    const {searchInput} = this.state 
    return (
      <SafeAreaView style={styles.container}>
        <Text style={{textAlign: 'center'}}>newCounty Page</Text>
        <TextInput value={searchInput} style={styles.inputSearch} onChangeText={this.inputChange} placeholder={'请搜索需要选择的国家'}/>
        <ScrollView
        >
          {/* <FlatList
            data={[{title: 'Title Text', key: 'item1'}, {title: 'Title Text', key: 'item1'}, {title: 'Title Text', key: 'item1'}]}
            renderItem={({item, separators}) => (
              <View style={{flex:1, backgroundColor: 'yellow'}}>
                <TouchableHighlight
                  onPress={() => this._onPress(item)}
                  style={{flex:1}}
                >
                  <View style={{backgroundColor: 'white'}}>
                    <Text>{item.title}</Text>
                  </View>
                </TouchableHighlight>
              </View>
            )}
          /> */}
          {this.renderListView()}
        </ ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputSearch: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 3,
    marginLeft: 5,
    marginRight: 5,
    fontSize: 12,
    padding: 5,
    paddingLeft: 10,
    marginBottom: 5,
  },
  county:{
    borderBottomWidth: 1,
    borderColor: '#999',
    marginLeft: 5,
    marginRight: 5,
  },
  countyTitle:{
    fontSize: 20,
  },
  countyList:{
    fontSize: 16,
    flex: 1,
  }
})

// export default connectView(NewCounty)
export default NewCounty