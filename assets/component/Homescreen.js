import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Homescreen = () => {
  return (
    <View style={styles.container}>
      <Text>Homescreen</Text>
    </View>
  )
}

export default Homescreen;

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#6e0ff5' ,
    flex:1
  }
})