import { StyleSheet, Text, View, DatePickerIOS} from 'react-native'
import React, { useState } from 'react'

const DatePicker = () => {
    const [chosenDate, setchosenDate] = useState(new Date())

  return (
    <View>
      <DatePickerIOS 
      date={chosenDate}
      onDateChange={(newDate)=> setchosenDate(newDate)}/>
    </View>
  )
}

export default DatePicker

const styles = StyleSheet.create({})