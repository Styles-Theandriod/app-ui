import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const Homescreen = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Ionicons name="menu-outline" size={30} color={"white"}></Ionicons>
        <Text style={styles.title}>Quiz App</Text>
        <Ionicons name="person-outline" size={30} color={"white"}></Ionicons>
      </View>

      <View style={styles.container}>
        <TouchableOpacity style={styles.item1}>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item2}>
          <Ionicons name="brush-outline" size={20} color={"white"}>
          </Ionicons>
            <Text>Art and Literature</Text>
        </TouchableOpacity>
            
        <TouchableOpacity style={styles.item3}>
          <Ionicons name="gift-outline" size={20} color={"white"}></Ionicons><Text>General Knowledge</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item4}>

        </TouchableOpacity>
        <TouchableOpacity style={styles.item5}>
          <Ionicons name="construct-outline" size={20} color={'white'}></Ionicons>
          <Text>Technologies </Text>

        </TouchableOpacity>
        <TouchableOpacity style={styles.item6}>
          <Text style={[styles.center, styles.borderRadius]}>UPGRADE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#23283b",
  },

  borderRadius: {
    borderRadius: 60,
  },

  container: {
    // backgroundColor:'red',
    height: 500,
    marginTop: 20,
    padding: 10,
  },

  header: {
    backgroundColor: "#2b3f54",
    height: "25%",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "900",
  },
  item1: {
    backgroundColor: "#DF7C32",
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
  },
  item2: {
    backgroundColor: "#2c4158",
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    flexDirection: "row",
    gap:20
  },
  item3: {
    backgroundColor: "#2c4158",
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    flexDirection: "row",
    gap:20
  },
  item4: {
    backgroundColor: "#2c4158",
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    flexDirection: "row",
    gap:20
  },
  item5: {
    backgroundColor: "#263142",
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    flexDirection: "row",
    gap:20
  },
  item6: {
    backgroundColor: "#c6d0df",
    padding: 20,
    marginBottom: 20,
    borderRadius: 15,
  },
  center: {
    textAlign: "center",
    fontWeight: "900",
    fontSize: 25,
  },
});
