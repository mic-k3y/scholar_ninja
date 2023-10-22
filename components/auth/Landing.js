import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";

const LandingPage = ({ navigation }) => {
  useEffect(() => {
    
    setTimeout(() => {
      navigation.navigate("Login"); 
    }, 5000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeIn" 
        duration={5000} 
        style={styles.animationContainer}
      >
        {/* If we had a logo, it would be great place to put it here. I am not a great graphic/logo designer  */}
        <Image style={styles.logo1} source={require('../../assets/logo.png')}  />
        <Text style={styles.title}>Scholar Ninja</Text>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white", 
    justifyContent: "center",
    alignItems: "center",
  },
  animationContainer: {
    alignItems: "center",
    transform: [{ scale: 1.2 }],
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#215D9D", 
  },
  logo1:{
    height: '150px',
    width: '150px',
  }
});

export default LandingPage;
