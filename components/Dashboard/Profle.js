import React from 'react'
import {getAuth} from 'firebase/auth'
import {View, Text, Button} from 'react-native'
import Icons from 'react-native-vector-icons'
import animators from 'react-native-animators'


const Profle = ({navigation}) => {

    auth = getAuth()

    const user = auth.currentUser()

    const email = user.email
    const name = 'M';
    const age = '19';



  return (
    <>
    <View style={styles.container}>
        
        <View style={styles.header}>
        <Icon name='profile' style={styles.icon} />
            <Text style={styles.headerText}>
                Profile
            </Text>
<TouchableOpacity
        style={styles.closeButton}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Text style={styles.closeButtonText}>X</Text>
      </TouchableOpacity>
        </View>

        <View style={styles.secondaryContainer}>
<Text style={style.welcomeText}>
            Welcome {email}
        </Text>
        <Text style={styles.listInfo}>
            Name: {name}
        </Text> 
        <Text style={styles.listInfo}>
            Age: {age}
        </Text>
        </View>
    
    </View>
    </>

  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F0F0F0",

    },
    header: {
        backgroundColor: '#215D9D',
        padding: 20,

    },
    headerText: {
        color: 'white',


    },
    listInfo: {
        
    },
    welcomeText: {

    }

    icon: {
        top: '30px',
        right: 10

    }
})

export default Profle
