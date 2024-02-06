import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const QuizAndroid = () => {
  return (
    <ScrollView style={styles.wrap}>
      <View style={styles.header}>
        <Ionicons name="beaker-outline" size={30} color={"white"} />
        <Text style={styles.title}>Science and Technologies</Text>
        <Ionicons name="construct-outline" size={30} color={"white"} />
      </View>

      <View style={styles.quizApp}>
        <Text style={styles.quiz1}>Quiz: 60</Text>
        <Text style={styles.quiz1}>03:00mins</Text>
      </View>

      <View style={styles.con1}>
        <Text style={styles.increase}> What is  JavaScript?</Text>

        <TouchableOpacity style={styles.quiz2}>
          <View style={styles.circle}></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quiz4}>
          <View style={styles.circle}></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quiz5}>
          <View style={styles.circle}></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quiz6}>
          <View style={styles.circle}></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quiz7}>
          <View style={styles.circle}></View>
        </TouchableOpacity>
        
        

      </View>
    </ScrollView>
  );
};

export default QuizAndroid;

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: "#242b41",
    flex: 1,
  },

  header: {
    backgroundColor: "red",
    height: 120,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  quiz2:{
    backgroundColor: "#c6ddf1",
    height: 50,
    width: "95%",    
    marginTop:10,
    borderRadius:50,
  },

  increase:{
    fontSize: 30,
    fontWeight: "bold",
    textAlign:'center',
    color:'white',
  },

  quiz4:{
    backgroundColor: "#e77c35",
    height: 50,
    width: "95%",    
    marginTop:10,
    borderRadius:50,
  },
  quiz5:{
    backgroundColor: "#c6ddf1",
    height: 50,
    width: "95%",    
    marginTop:10,
    borderRadius:50,
  },
  quiz6:{
    backgroundColor: "#c6ddf1",
    height: 50,
    width: "95%",    
    marginTop:10,
    borderRadius:50,
  },
  quiz7:{
    backgroundColor: "#e77c35",
    height: 60,
    width: "95%",    
    marginTop:60,
    borderRadius:20,
  },

  circle:{
    
  },

  quizApp: {
    // backgroundColor: "orange",
    height: 60,
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderBottomWidth:3,
    borderBottomColor: "white",

  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "900",
  },

  quiz1: {
    color: "white",
    fontSize: 20,
    fontWeight: "900",
  },

  

  container: {
    // backgroundColor: "white",
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },

  quiz3: {
    flexDirection: "row",
    alignItems: "center",
  },

  con1: {
    backgroundColor: "#242b41",
    height: 490,
    width: 430,
    padding:20
  },


});
