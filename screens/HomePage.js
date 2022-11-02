import React from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from "react";

const DATA = [
  {
    title: "aaaaaa"
  }
];

const Item = ({ title }) => (
  <View style={styles.taskView}>
    <Text>{title}</Text>
  </View>
);

const HomePage = () => {

  const renderItem = ({item}) => {
    <Item title={item.title}/>
  }

  const [tasks, setTasks] = useState([]);



  return (
    <View style={styles.container}>
      <FlatList
      data={DATA}
      renderItem={renderItem}/>
      <Text style={{fontSize: 26, color: "white"}}>Hello, World!</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#22272e",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  taskView: {
    width: "80%",
    height: 40,
    backgroundColor: "red",
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default HomePage;