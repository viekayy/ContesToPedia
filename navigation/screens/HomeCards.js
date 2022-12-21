import React, {useState,useEffect} from 'react';
import { View, Text,FlatList, StyleSheet, Dimensions,Linking } from 'react-native';


export default function HomeCards({ navigation }) {
    
    //loading screen
    const[isLoaded, setIsLoaded] = useState(true);


    //API data fetch
    const [myData, setMyData] = useState([]);
    const getUserData= async ()=>{
    try{
            const response = await fetch("https://kontests.net/api/v1/code_chef");
            const realData = await response.json();
            setMyData(realData);
            setIsLoaded(false);
            console.log(realData);

        }catch(error){
            console.log(error);
        }
    };
    

    useEffect(() => getUserData(),[]);

    //Show placement data
    const showUserData = ({item})=>{
        
        return(
        <View style={styles.card}>
        <View style={styles.cardContainer}>
             
            <Text style={styles.itemName} >Contest Name : {item.name}</Text>
            <Text style={styles.itemStyle}>Start Time : {item.start_time}</Text>
            <Text style={styles.itemStyle}>End Time : {item.end_time}</Text>
            <Text style={styles.itemStyle}> Description : This is a competitive coding test , where it allows you to practice various coding problems and conducting their hiring test here. The test also gives you badges by solving challenges on the website </Text>
            {/* <Text style={styles.itemurl} onPress={() => Linking.openURL(item.url)}>{item.url}</Text> */}
            <Text style={styles.url} onPress={() => Linking.openURL(item.url)}>Go To Contest</Text>
            
        </View>
        
        {/* <TouchableOpacity style={styles.loginBtn}> */}
      {/* </TouchableOpacity> */}
        </View>
        
        
        )
    };


    return (
            <FlatList 
                data={myData}
                renderItem={showUserData}
                // horizontal={true}
                />
    );
}
// const deviceWidth = Math.round(Dimensions.get('window'.width))
const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    cardContainer: {
    width: deviceWidth-25,
    backgroundColor: '#1218F0',
    flex:1,
    alignItems:"center",
    justifyContent:"space-between",
    width: 400,
    // backgroundColor: 'orange',
    height:600,
    borderRadius:20,
    marginLeft:12,
    marginTop:30,
    shadowColor: '#1218F0',
    shadowOffset: {
        width:5,
        height: 5,
    },
    shadowOpacity: 9.75,
    shadowRadius:5,
    elevation: 9,

},
url:{
    backgroundColor:"white",
    borderRadius:10,
    width:115,
    padding:8,
    // height:20,
    // fontWeight:700,
},

itemStyle: {
    paddingLeft: 10,
    paddingBottom:8,
    color:"#fff",
    fontSize:18
  },
  
  itemName:{
    paddingLeft:10,
    paddingBottom:8,
    color:"#000",
    fontSize:25,
    fontWeight:"bold"
  },
  cardStyle:{
      marginTop:0,
  },
  itemurl:{
    paddingLeft: 10,
    paddingBottom:8,
    color:"white",
    fontWeight:"bold",
    fontSize:18
  },
  textInputStyle: {
    height: 40,
    // borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
  searchCard:{
      padding:5,
      paddingBottom:15,
      paddingTop:15,
      borderWidth:1,
      borderColor:"#fff",
      backgroundColor:"orange",
      borderRadius:20,
      marginTop:0,
      marginBottom:0,
      marginLeft:10,
      marginRight:10,
  }
});








