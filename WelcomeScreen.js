import React, { Component } from 'react';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity, Alert} from 'react-native';
import db from '../config' 
import firebase from 'firebase'
export default class WelcomeScreen extends Component {
    constructor (){
        super();
        this.state={
            emailId:'',
            password:'',
        }
    }

    userSignUp=(emailId,)=> {
        firebase.auth().createUserWithEmailAndPassword(emailId,password)
        .then((response)=>{
            return Alert.alert('User added sucessfully')
        })
        .catch(function(error){
       
            var errorCode=error.code;
            var erorMessage=error.message;
            return Alert.alert(errorMessage)
    })
    }

    userLogin=(emailId,)=> {
        firebase.auth().signInWithEmailAndPassword(emailId,password)
        .then((response)=>{
            return Alert.alert(' sucessfully login')
        })
        .catch(function(error){
            var errorCode=error.code;
            var erorMessage=error.message;
            return Alert.alert(errorMessage)
        })
    }
    render (){
        return(
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>Book Santa </Text>
                </View>

                <View>
                    <TextInput 
                    style={styles.loginBox}
                    placeHolder='abc@example.com'
                    keyboardType='email-address'
                    onChangeText={(text)=>{
                        this.setState({
                            emailId:text
                        })
                    }}
                    />
                         <TextInput 
                    style={styles.loginBox}
                    secureTextEntry={true}
                    placeHolder='enter Password'
                    onChangeText={(text)=>{
                        this.setState({
                            password:text
                        })
                    }}
                    />

                    <TouchableOpacity 
                    style={[style.button,{marginBottom:20,marginTop:20}]}
                    onPress={()=>{this.userLogin(this.state.emailIdId ,this.state.password)}}>
                        <Text style={styles.buttonText}>login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    style={[style.button,{marginBottom:20,marginTop:20}]}
                    onPress={()=>{this.userSignUp(this.state.emailIdId ,this.state.password)}}>
                        <Text style={styles.buttonText}>signUp</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}