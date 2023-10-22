import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet, Text, Image } from "react-native";

export class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
    };

    this.onSignup = this.onSignup.bind(this);
  }

  onSignup() {
    const { name, email, password } = this.state;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Signed Up");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(error);
      });

      auth.onAuthStateChanged((user) => {
        if (user) {
          this.props.navigation.navigate('Dashboard'); 
        }
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <View style={styles.formContainer}>
          <Text style={styles.title}>Sign Up</Text>
          <TextInput
            placeholder="Name"
            style={styles.input}
            onChangeText={(name) => this.setState({ name })}
          />
          <TextInput
            placeholder="Email"
            style={styles.input}
            onChangeText={(email) => this.setState({ email })}
          />
          <TextInput
            placeholder="Password"
            style={styles.input}
            onChangeText={(password) => this.setState({ password })}
          />
          <Button title="Register" onPress={() => this.onSignup()} color="#215D9D" />
          <Text style={styles.text} onPress={()=> this.props.navigation.navigate("Login")}>Already have an account?</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#215D9D', 
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#215D9D', 
    marginBottom: 20,
  },
  text: {
    paddingTop: 8,
    color: 'blue'
  },
});

export default Register;
