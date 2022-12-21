import * as React from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
  } from "react-native";


export default function SelPlatform({ navigation }) {
    return (
        
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity style={styles.Btn}>
                <Text style={styles.Text}>LeetCode</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Btn}>
                <Text style={styles.Text}>CodeForces </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Btn}>
                <Text style={styles.Text}>CodeForces::Gym </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Btn}>
                <Text style={styles.Text}>TopCoder </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Btn}>
                <Text style={styles.Text}>AtCoder </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Btn}>
                <Text style={styles.Text}>CodeChef </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Btn}>
                <Text style={styles.Text}>CS Academy </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Btn}>
                <Text style={styles.Text}>HackerRank </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Btn}>
                <Text style={styles.Text}>HackerEarth </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Btn}>
                <Text style={styles.Text}>Kick Start </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Btn}>
                <Text style={styles.Text}>SITES </Text>
            </TouchableOpacity>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
   
    Text: {

        color:"red",
     
        // alignItems: "center",
      },
    
    Btn: {
        width: "90%",
        borderRadius:20,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: "#F3CA6C",
    },
    
    
});