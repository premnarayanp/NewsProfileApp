import { Button, Text, View, TextInput, StyleSheet } from 'react-native';
import React, { useState } from "react";
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function SignUp({ navigation }) {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    return (
        <View style={{ flex: 1, alignItems: 'center', paddingHorizontal: 10 }}>
            <View style={styles.signUpForm}>
                <Text style={{ fontSize: 20, color: 'red', fontWeight: 700, marginBottom: 30 }}>SignUp Form</Text>

                <TextInput
                    style={styles.input}
                    value={name}
                    placeholder={"Name"}
                    onChangeText={(text) => setName(text)}
                    autoCapitalize={"none"}
                />

                <TextInput
                    style={styles.input}
                    value={username}
                    placeholder={"Username"}
                    onChangeText={(text) => setUsername(text)}
                    autoCapitalize={"none"}
                />
                <TextInput
                    style={styles.input}
                    value={password}
                    placeholder={"Password"}
                    secureTextEntry
                    onChangeText={(text) => setPassword(text)}
                />

                <TextInput
                    style={styles.input}
                    value={confirmPassword}
                    placeholder={"Confirm Password"}
                    secureTextEntry
                    onChangeText={(text) => setConfirmPassword(text)}
                />
                <TouchableOpacity style={styles.signUpBtn}>
                    <Text style={{ fontSize: 16, color: 'white', fontWeight: 700 }}>SignUp</Text>
                </TouchableOpacity>
            </View>

            <View style={{ marginTop: 50, display: 'flex', alignItems: 'flex-end', flexDirection: 'column' }}>
                <Text style={{ fontSize: 16, color: 'gray', fontWeight: 500 }}>If you already registered then Login</Text>
                <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
                    <Text style={{ textAlign: 'right', fontSize: 16, color: 'blue', fontWeight: 700, borderBottomWidth: 1, borderBottomColor: 'blue' }}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    signUpForm: {
        marginTop: 100,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
        //borderWidth: 1,
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,

    },
    input: {
        marginTop: 10,
        paddingHorizontal: 10,
        height: 40,
        width: 300,
        backgroundColor: 'white',
        marginBottom: 10,
        backgroundColor: 'pink',
        //borderWidth: 1,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },

    signUpBtn: {
        width: 300,
        marginTop: 20,
        paddingVertical: 10,
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'red',
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    }
});