import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import AtoZList from 'react-native-atoz-list'

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
  'E': [{
    title: 'bbb'
  }, {
    title: 'bbb'
  }, {
    title: 'bbb'
  }],
}

class County extends Component{
  static navigationOptions = () => ({
    title: 'County',
    // headerBackTitle: null,
  })
  renderCellComponent = (e) => {
    console.log(e)
    return (
      <Text>{e.sectionId}</Text>
    )
  }
  renderSectionComponent = (e) => {
    console.log(e)
    return (
      <Text>{e.title}</Text>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>County Page</Text>
        <AtoZList
          sectionHeaderHeight={20}
          cellHeight={60}
          data={myData}
          renderCell={this.renderCellComponent}
          renderSection={this.renderSectionComponent}
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

export default County