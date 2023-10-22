import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import Icon from "react-native-vector-icons/FontAwesome";

const ScholarshipDetails = () => {
  const route = useRoute();
  const scholarship = route.params.scholarship;
  const navigation = useNavigation();

  const closeDetails = () => {
    navigation.goBack(); 
  };

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInUp" duration={1000} style={styles.contentContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>{scholarship.title}</Text>
          <TouchableOpacity onPress={closeDetails} style={styles.closeButton}>
            <Icon name="times" size={24} color="#215D9D" />
          </TouchableOpacity>
        </View>
        <Text style={styles.description}>{scholarship.description}</Text>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    
  },
  contentContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    elevation: 4, 
    height: '70%',
    width: '90%'
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  closeButton: {
    padding: 10,
    borderRadius: 20,
  },
  description: {
    fontSize: 16,
  },
});

export default ScholarshipDetails;