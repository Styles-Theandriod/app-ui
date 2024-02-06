import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const TextInput = (props) => {
  return (
    <View>
      <TextInput placeholder={props.message} style={styles.TextInput} />
      <Text>{props.message}</Text>
    </View>
  )
}

export default TextInput

const styles = StyleSheet.create({
    TextInput: {
        borderWidth: 2,
        borderColor:'red',
        borderRadius:10
    }
})