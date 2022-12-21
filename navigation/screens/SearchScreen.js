import React, {useState, useEffect} from 'react';
 
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  Linking
} from 'react-native';
 
const SearchScreen = () => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
 
  useEffect(() => {
    fetch('https://kontests.net/api/v1/all')
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
 
  const searchFilterFunction = (text) => {
    if (text) {
      const newData = masterDataSource.filter(
        function (item) {
          const itemData = item.name
            ? item.name.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };
 
  const ItemView = ({item}) => {
    return (

   <>
        <View style={styles.searchCard}>
            <Text style={styles.itemName} >{item.name}</Text>
            <Text style={styles.itemStyle}>{item.start_time}</Text>
            <Text style={styles.itemStyle}>{item.end_time}</Text>
            {/* <Text style={styles.itemUrl} onPress={() => Linking.openURL(item.url)} >{item.url}</Text> */}
            <Text style={styles.url} onPress={() => Linking.openURL(item.url)}>Go To Contest</Text>
        </View>
   </>
    );
  };
 
  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          marginTop:10,
        }}
      />
    );
  };
 
  const getItem = (item) => {
    // Function for click on an item
    alert(' name : ' + item.name);
  };
 
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Enter the contest name!"
        />
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
          style={styles.cardStyle}
        />
      </View>
    </SafeAreaView>
  );
};
 
const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'orange',
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
    color:"#FFF",
    fontSize:28,
    fontWeight:"bold"
  },
  cardStyle:{
      marginTop:0,
  },
  url:{
    backgroundColor:"white",
    borderRadius:10,
    width:115,
    padding:8,
    // height:20,
    // fontWeight:700,
},
  itemUrl:{
    paddingLeft: 10,
    paddingBottom:8,
    color:"#fff",
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
      backgroundColor:"#1597BB",
      borderRadius:20,
      marginTop:0,
      marginBottom:0,
      marginLeft:10,
      marginRight:10,
  }
});
 
export default SearchScreen;
