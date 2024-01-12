import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const Quiz = () => {
  return (
    <View style={styles.wrap}>
      <View style={styles.header}>
      <Ionicons name="beaker-outline" size={30} color={"white"}></Ionicons>
        <Text style={styles.title}>Science and Technologies</Text>
        <Ionicons name="construct-outline" size={30} color={"white"}></Ionicons>
      </View>

      <View style={styles.quizApp}>
        <Text style={styles.quiz1}>Quiz: 60</Text>
        <Text style={styles.quiz1}>03:00mins</Text>
      </View>

    <View style={styles.container}> 

    <Text style={styles.quiz2}>Quiz: 60</Text>
    
        <TouchableOpacity style={styles.quiz3}>
        <TouchableOpacity style={styles.quiz3}>
          <Ionicons name="aperture-outline" size={20} color={"white"}>
          </Ionicons>
            <Text>Art and Literature</Text>
        </TouchableOpacity>
        </TouchableOpacity>

    </View>

    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: "#1b3b50",
    flex: 1,
  },

  header: {
    backgroundColor: "red",
    height: 120,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-around',
    

  },

  quizApp:{
    backgroundColor: "orange",
    height:35,
    marginTop:60,
    justifyContent: 'center',
    flexDirection: "row",
    justifyContent: 'space-around',
    


  },
  title:{
    color: "white",
    fontSize: 20,
    fontWeight: "900",
  },

  quiz1:{
    color: "white",
    fontSize: 20,
    fontWeight: "900",
},

    quiz2:{
        color: "white",
        fontSize: 20,
        fontWeight:900,
    },
});
