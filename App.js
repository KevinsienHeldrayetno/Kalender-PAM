import React from 'react';
import {Text, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
const kalendar = () => {
  return (
    <View
    style={{
      flex: 1,
      backgroundColor: "black",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Text>Testing</Text>
      <Calendar
        markingType={'custom'}
        markedDates={{
          '2022-10-19' : {customStyles:{container:{backgroundColor:"red", elevation:2}, text:{color:'black'}}},
          '2022-10-28' : {customStyles:{container:{backgroundColor:"red", elevation:2}, text:{color:'black'}}},
          '2022-11-01' : {customStyles:{container:{backgroundColor:"red", elevation:2}, text:{color:'black'}}},
          '2022-10-10' : {customStyles:{container:{backgroundColor:"red", elevation:2}, text:{color:'black'}}}
        }}
      />
    </View>
  )
}

export default kalendar;