import React, {Component} from 'react'
import {StyleSheet, Text, View, TouchableHightLight} from 'react-native'
import AtoZListView from 'react-native-atoz-listview'

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
}

class NewCounty extends Component{
  static navigationOptions = () => ({
    title: 'County',
    // headerBackTitle: null,
  })
  state = {
    data: {
      "A": [
        {
          "name": "Anh Tuan Nguyen",
          "age": 28
        },
        {
          "name": "An Nguyen",
          "age": 20
        },
      ],
      "Z": [
        {
          "name": "Zue Dang",
          "age": 22
        },
        {
          "name": "Zoom Jane",
          "age": 30
        },
      ]
    }
  }

  // _renderCellComponent = (e) => {
  //   console.log(e)
  //   return (
  //     <Text>{e.sectionId}</Text>
  //   )
  // }
  // _renderSectionComponent = (e) => {
  //   console.log(e)
  //   return (
  //     <Text>{e.title}</Text>
  //   )
  // }
  renderRow = (item, sectionId, index) => {
    return (
      <View 
        style={{ 
          height: rowHeight, 
          justifyContent: 'center', 
          alignItems: 'center'}}
      >
        <Text>{item.name}</Text>
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>newCounty Page</Text>
         <AtoZListView
          data={this.state.data}     
          renderRow={this.renderRow} 
          rowHeight={40}
          sectionHeaderHeight={40} 
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default NewCounty