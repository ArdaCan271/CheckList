import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from "react";

const HomePage = () => {

  const [tasks, setTasks] = useState([]);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("tasks");
      if (value !== null) {
        setTasks(JSON.parse(value))
      }
    } catch (err){
      console.log(err);
    }
  }

  useEffect(() => {
    getData();
  }, [])

  useEffect(() => {
    async function storeItems(){
      const stringifiedTasks = JSON.stringify(tasks);
      await AsyncStorage.setItem("tasks", stringifiedTasks)
    }
    storeItems();
  }, [tasks.length])

  const [text, setText] = useState("")

  const handleAddPress = () => {
    if (text.length !== 0){
        setTasks([...tasks, text]);
    }
    setText("");
  }

  const handleDelPress = (index) => {
    const newTasks = [...tasks]
    newTasks.splice(index, 1)
    setTasks(newTasks)
  }

  return (
    <View style={styles.container}>

    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#22272e",
  }
});

export default HomePage;