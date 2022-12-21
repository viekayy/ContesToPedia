import { NavigationContainer, StackActions } from '@react-navigation/native';
import React,{useState, useEffect} from 'react';
import MainContainer from './navigation/MainContainer';
import RootStack from './navigation/screens/RootStack'
import SelPlatform from './navigation/screens/SelPlatform';


function App() {
  
  const [login, setLogin] = useState(true);
  
  return (
    // <>
    //   {
    //    login 
    //    ?
    //  <MainContainer />
    //    :
    //   <RootStack />
    //   }
     
    //  </>


    // <NavigationContainer>
    //   <Stack.Navigator  initialRouteName='SelPlatform'>
    //     <Stack.Screen name ='MainContainer' component={MainContainer}/>
    //     <Stack.Screen name ='SelPlatform' component={SelPlatform}/>
    //   </Stack.Navigator>
    // </NavigationContainer>



    <>
      <MainContainer/>
    </>
  );
}

export default App;