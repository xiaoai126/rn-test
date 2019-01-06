import React, {Component} from 'react'
import {StyleSheet, Text, View, Button} from 'react-native'
import { Loading } from '../../component'
class Home extends Component{
  static navigationOptions = () => ({
    title: 'Home',
  })
  state = {
    loading: false
  }
  render() {
    const { loading } = this.state
    const { params } = this.props.navigation.state
    return (
      <View style={styles.container}>
        <Text  style={{textAlign: 'center'}}>Home Page</Text>
        { params ? <Text style={{textAlign: 'center'}}>{JSON.stringify(params)}</Text> : <Text style={{textAlign: 'center'}}>没有获取到国家地质，请选择国家</Text>}
        <Loading loading={loading}/>
        {/* <Button
          title={'go to County'}
          onPress={()=>{this.props.navigation.navigate('County')}}
        /> */}
        <Button
          title={'go to NewCounty'}
          onPress={()=>{this.props.navigation.replace('NewCounty')}}
        />
        <Button
          title={'go to Layout'}
          onPress={()=>{this.props.navigation.navigate('Layout')}}
        />
        {/* <Button
          title={'loading'}
          onPress={()=>{this.setState({loading: !loading})}}
        /> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  }
})

export default Home