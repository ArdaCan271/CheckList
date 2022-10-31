import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from "react";

const Task = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.toDoText} adjustsFontSizeToFit>{props.text}</Text>
      <View style={styles.deleteIcon}><TouchableOpacity onPress={props.onPress}><Ionicons name='trash' size={26} color="gray"/></TouchableOpacity></View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#22272e",
  }
});

export default Task;