import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet, Text, Image } from "react-native";
import { getAuth, signInWithEmailAndPassword} from 'firebase/auth'

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.onSignin = this.onSignin.bind(this);
  }

  onSignin() {
    const { name, email, password } = this.state;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(error);
      });

      auth.onAuthStateChanged((user) => {
        if(user){
          this.props.navigation.navigate('Dashboard');
        }
      })
  }

  render() {

    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
        <View style={styles.formContainer}>
          <Text style={styles.title}>Login</Text>
          <TextInput
            placeholder="Email"
            style={styles.input}
            onChangeText={(email) => this.setState({ email })}
          />
          <TextInput
            placeholder="Password"
            style={styles.input}
            onChangeText={(password) => this.setState({ password })}
            secureTextEntry
          />
          <Button title="Login" onPress={() => this.onSignin()} color="#215D9D" />
          <Text style={styles.text} onPress={()=> this.props.navigation.navigate('Register')}>Don't have an Account?</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
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

export default Login;
