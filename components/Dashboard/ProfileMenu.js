import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import * as Animatable from "react-native-animatable";

const ProfileMenu = ({ navigation }) => {
  const menuItems = [
    {
      icon: "user",
      text: "My Profile",
      action: () => navigation.navigate("ProfileDetails"),
    },
    {
      icon: "cog",
      text: "Settings",
      action: () => navigation.navigate("Settings"),
    },
    {
      icon: "graduation-cap",
      text: "My Scholarships",
      action: () => navigation.navigate("MyScholarships"),
    },
    {
      icon: "heart",
      text: "Favorites",
      action: () => navigation.navigate("Favorites"),
    },
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Text style={styles.closeButtonText}>X</Text>
      </TouchableOpacity>
      <Animatable.View
        animation="fadeInDown"
        duration={1000}
        style={styles.contentContainer}
      >
        <Text style={styles.title}>Profile Menu</Text>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            style={styles.menuItem}
            key={index}
            onPress={item.action}
          >
            <Icon
              name={item.icon}
              size={30}
              color="#215D9D"
              style={styles.menuIcon}
            />
            <Text style={styles.menuText}>{item.text}</Text>
          </TouchableOpacity>
        ))}
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  closeButton: {
    position: "absolute",
    top: 30,
    right: 10,
    backgroundColor: "#215D9D",
    width: 30,
    height: 30,
    borderRadius: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  closeButtonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  menuIcon: {
    marginRight: 10,
  },
  menuText: {
    fontSize: 20,
  },
});

export default ProfileMenu;
