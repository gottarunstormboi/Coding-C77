import React, { Component } from 'react'
import { Text, View, StyleSheet ,ImageBackground} from 'react-native'

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.conatiner}>
                <View style={styles.titlebar}><Text style ={styles.titletext}>ISS Tracker App</Text ></View>
                
                    <TouchableOpacity style ={styles.routeCard}>
                        <Text style={styles.routeText}>IssLocation Screen</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style ={styles.routeCard}>
                        <Text style={styles.routeText}>Meteor Screen</Text>
                    </TouchableOpacity>

                </View >

                )
    }
}

const styles = StyleSheet.create({
    conatiner: {
        flex: "1",
        justifyContent: "center",
        alignitems: "center"
    },
    titletext: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white",
    },
    titlebar:{
        flex: 0.15,
        justifyContent: "center",
        alignitems: "center",
    },
    routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: "30",
        backgroundcolor: "white",
        
    },
    routeText:{
        marginTop: 75,
        fontWeight: "bold",
        color: "black",
        paddingleft: 30,
    }
})