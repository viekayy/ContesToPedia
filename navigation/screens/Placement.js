import * as React from 'react';
import { ScrollView,View, Text } from 'react-native';
import PlacementCard from './PlacementCard';


export default function Placement({ navigation }) {

    
    return (
    <>
        <ScrollView>
            <PlacementCard/>
 
        </ScrollView>
    </>
    );
}
