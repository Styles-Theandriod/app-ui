import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'
import QuizAndroid from './Quiz.android'

const Platform = () => {
  return (
    <View>
      <Text>Platform</Text>
      {Platform.OS === 'ios' && <Text style={styles.iosStyle}>Ios- specific Code</Text>}
      {Platform.OS === 'andriod' && QuizAndroid }
    </View>
  )
}

export default Platform

const styles = StyleSheet.create({
    iosStyle: Platform.select({
        ios:{
            fontweight: 'bold',
        },

        android:{
            fontSize:12
        }
    })

})