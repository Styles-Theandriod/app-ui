import { StyleSheet, Text, View, Platform, SafeAreaView , ScrollView} from 'react-native'
import React from 'react'

const TextInputIOS = () => {
  return (
    <ScrollView>
      {Platform.OS === 'ios' && <Text style={styles.platformStyle}>I am an ios device</Text>}
      {Platform.OS === 'android' && <Text style={styles.platformStyle}>I am an android device</Text>}

      
    </ScrollView>
  )
}

export default TextInputIOS

const styles = StyleSheet.create({
  platformStyle:Platform.select({
    ios:{
      color:'red'
    },
    android:{
      color:'green'
    }
  })
})